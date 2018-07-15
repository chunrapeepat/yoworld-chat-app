import React, {Component} from 'react'
import {injectGlobal} from 'styled-components'
import {connect} from 'react-redux'

import Room from './Room'
import Setting from './Setting'
import Landing from './Landing'
import {provider, auth, firestore} from '../core/client'

import {userLogin} from '../ducks/user'

injectGlobal`
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`

class App extends Component {
  login = async () => {
    let {user} = await auth().signInWithPopup(provider)
    // insert to firebase firestore
    const docUser = await firestore.collection('users')
      .where('uid', '==', user.uid).get()
    // if user not exist insert to database
    if(!docUser.docs.length) {
      await firestore.collection('users').add({
        uid: user.uid,
        fb_id: user.providerData[0].uid,
        email: user.email,
        photo: user.photoURL,
        display_name: user.displayName,
        created_at: new Date,
        voice: '',
        pitch: 1.0,
      })
    }
    // update redux state
    this.props.userLogin(user)
  }

  componentDidMount() {
    // auth().signOut()
    // auto login when state change
    auth().onAuthStateChanged(async user => {
      if (!this.props.user.user && user) {
        this.props.userLogin(user)
      }
    })
  }

  render() {
    const {user} = this.props.user
    return(
      <div>
        {user ? <Room/> : <Landing login={this.login}/>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  userLogin: user => dispatch(userLogin(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

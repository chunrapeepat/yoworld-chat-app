import React, {Component} from 'react'
import {injectGlobal} from 'styled-components'
import {connect} from 'react-redux'

import Room from './Room'
import Setting from './Setting'

import Landing from './Landing'
import ChatRoom from './ChatRoom'
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
      })
      user.firstTime = true
    }
    // if voice and pitch is not setting
    if (docUser.docs.length > 0 && (!docUser.docs[0].data().voice || !docUser.docs[0].data().pitch)) {
      user.firstTime = true
    }
    // update redux state
    this.props.userLogin(user)
  }

  componentDidMount() {
    // auto login when state change
    auth().onAuthStateChanged(async user => {
      if (!this.props.user.user && user) {
        let userUpdate = Object.assign(user, {})
        // check pitch and voices
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
          })
          user.firstTime = true
        }
        // if voice and pitch is not setting
        const doc = docUser.docs[0].data()
        if (docUser.docs.length > 0 && (!doc.voice || !doc.pitch)) {
          user.firstTime = true
        }
        this.props.userLogin(userUpdate)
      }
    })
  }

  render() {
    const {user} = this.props.user
    return(
      <div>
        {user ? <ChatRoom/> : <Landing login={this.login}/>}
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

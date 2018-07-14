import React, {Component} from 'react'
import {injectGlobal} from 'styled-components'

import Landing from './Landing'
import ChatRoom from './ChatRoom'
import {provider, auth, firestore} from '../core/client'

injectGlobal`
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`

class App extends Component {
  state = {
    user: null,
  }

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
    this.setState({user})
  }

  logout = async () => {
    await auth().signOut()
    this.setState({user: null})
  }

  render() {
    const {user} = this.state
    return(
      <div>
        {user ? <ChatRoom user={user}/> : <Landing login={this.login}/>}
      </div>
    )
  }
}

export default App

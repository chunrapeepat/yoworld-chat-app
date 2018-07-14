import React, {Component} from 'react'
import firebase from 'firebase'
import {injectGlobal} from 'styled-components'

import {provider, auth} from '../core/client'

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
    const {user} = await auth().signInWithPopup(provider)
    this.setState({user})
  }

  logout = async () => {
    await auth().signOut()
    this.setState({user: null})
  }

  render() {
    const {user} = this.state
    return(
      <div className='app'>
        <p>{user ? `Hi, ${user.displayName}!` : 'Hi!'}</p>
        <button onClick={this.login}>
          Login with Facebook
        </button>

        <button onClick={this.logout}>
          Logout
        </button>
      </div>
    )
  }
}

export default App

import React, {Component} from 'react'
import firebase from 'firebase'
import {injectGlobal} from 'styled-components'

import Landing from './Landing'
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
    console.log('hello', user)
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
        {user ? 'login' : <Landing login={this.login}/>}
      </div>
    )
  }
}

export default App

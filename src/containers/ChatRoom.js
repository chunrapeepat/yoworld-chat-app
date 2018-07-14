import React, {Component} from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'

import Setting from './Setting'
import {Center, Container} from '../core/styled'
import {fonts, fontSize} from '../core/helper'

export default class extends Component {
  state = {
    firstTime: this.props.user.firstTime || false,
    user: this.props.user || {},
  }

  render() {
    if (this.state.firstTime) {
      return <Setting user={this.props.user}/>
    }
    return (
      <div>
        This is a chat room
      </div>
    )
  }
}

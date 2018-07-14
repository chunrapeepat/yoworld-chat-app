import React, {Component} from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'
import {connect} from 'react-redux'

import Setting from './Setting'
import {Center, Container} from '../core/styled'
import {fonts, fontSize} from '../core/helper'

class ChatRoom extends Component {
  render() {
    if (this.props.user.firstTime) {
      return <Setting/>
    }
    return (
      <div>
        This is a chat room
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(mapStateToProps, null)(ChatRoom)
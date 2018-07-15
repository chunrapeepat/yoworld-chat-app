import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {Modal, Button} from 'antd'
import {fonts, fontSize} from '../core/helper'
import {firestore} from '../core/client'

const MessageListButton = styled.div`
  position: fixed;
  cursor: pointer;
  bottom: 10px;
  right: 10px;
  color: #777;
  padding: 10px 25px;
  border-radius: 10px;

  font-family: ${fonts.header};
  font-size: ${fontSize.normal}px;

  &:hover {
    color: #333;
    font-weight: bold;
  }
`

class MessageList extends Component {
  state = {
    messages: [],
    visible: false,
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }

  componentDidMount = () => {
    // listen to new messages
    firestore.collection('messages')
      .where('to_uid', '==', this.props.user.uid)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            const data = change.doc.data()
            const messages = [...this.state.messages, data]
            this.setState({messages})
          }
        })
      })
  }

  render() {
    return (
      <div>
        <Modal title="View all messages"
          width={700}
          visible={this.state.visible}
          onOk={this.handleCancel}
          onCancel={this.handleCancel}>

          {this.state.messages.map((message, i) => {
            return <li key={`message_${i}`}>Receive message from {message.from} <b>"{message.message}"</b></li>
          })}
        </Modal>
        <MessageListButton onClick={() => this.setState({visible: true})}>View messages</MessageListButton>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(mapStateToProps, null)(MessageList)

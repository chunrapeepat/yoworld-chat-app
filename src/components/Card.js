import React, {Component} from 'react'
import styled from 'styled-components'
import {Modal, Button, Input} from 'antd'
import {connect} from 'react-redux'

import {firestore} from '../core/client'

const TextArea = Input.TextArea

const Container = styled.div`
  width: 100%;
`

const Photo = styled.img`
  width: 100%;
  cursor: pointer;
  filter: grayscale(1);
  transition: 0.5s;

  &:hover {
    filter: grayscale(0);
  }
`

class Card extends Component {
  state = {
    visible: false,
    messageValue: '',
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = async () => {
    const user = this.props.user
    // get pitch and voice from database
    const docUser = await firestore.collection('users')
      .where('uid', '==', this.props.me.uid).get()
    const me = docUser.docs[0].data()
    // insert data to firestore
    await firestore.collection('messages').add({
      from: me.display_name,
      from_uid: me.uid,
      pitch: me.pitch,
      voice: me.voice,
      to_uid: user.uid,
      message: this.state.messageValue,
    })
    // clean up and close modal
    this.setState({messageValue: '', visible: false})
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }

  handleMessage = event => {
    const message = event.target.value
    if (message.length < 120) {
      this.setState({messageValue: message})
    }
  }

  render() {
    const {photo, display_name} = this.props.user
    const {visible, confirmLoading} = this.state
    return (
      <Container>
        <Modal title={`Send message to ${display_name}`}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}>
          <TextArea onChange={this.handleMessage} value={this.state.messageValue} placeholder="Enter your message" rows={3} />
        </Modal>

        <Photo onClick={this.showModal} src={`${photo}?type=large`}/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  me: state.user.user,
})

export default connect(mapStateToProps, null)(Card)

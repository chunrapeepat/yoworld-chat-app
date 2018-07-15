import React, {Component} from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'

import {Center, FixedContainer} from '../core/styled'
import {fonts, fontSize, speak} from '../core/helper'

const LoginWithFacebook = styled.button`
  position: relative;
  text-align: center;
  padding: 10px 30px;
  background: #465EA9;
  color: white;
  border-radius: 3px;
  border: 0;
  outline: none;
  cursor: pointer;

  font-family: ${fonts.header};
  font-size: ${fontSize.header}px;
`

const Profile = styled.img`
  width: 1000px;
  margin-bottom: 20px;
  cursor: pointer;
`

export default class extends Component {
  sayHello() {
    speak('Hey yo. Welcome', 2)
  }

  render() {
    return (
      <FixedContainer>
        <Center>
          <center><Profile onClick={this.sayHello} src="https://cbsnews1.cbsistatic.com/hub/i/r/2018/04/26/3a2033a4-9384-4d20-b63f-a96249c51a35/thumbnail/620x350/21dd96b19bdacb9ef83f03e9f45bbe67/gettyimages-529940582.jpg"/>
          <LoginWithFacebook onClick={this.props.login}>
            <Ink />
            Login With Your Facebook Account
          </LoginWithFacebook></center>
        </Center>
      </FixedContainer>
    )
  }
}

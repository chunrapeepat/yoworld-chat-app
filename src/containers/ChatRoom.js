import React, {Component} from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'

import {Center} from '../core/styled'
import {fonts, fontSize} from '../core/helper'

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: black;
`

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

export default ({login}) => (
  <Container>
    <Center>
      <LoginWithFacebook onClick={login}>
        <Ink />
        Login With Your Facebook Account
      </LoginWithFacebook>
    </Center>
  </Container>
)

import React, {Component} from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'

import {Center, FixedContainer} from '../core/styled'
import {fonts, fontSize} from '../core/helper'

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
  <FixedContainer>
    <Center>
      <LoginWithFacebook onClick={login}>
        <Ink />
        Login With Your Facebook Account
      </LoginWithFacebook>
    </Center>
  </FixedContainer>
)

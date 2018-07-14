import React from 'react'
import styled from 'styled-components'

import {fonts, fontSize} from '../core/helper'

const Container = styled.div`
  position: relative;
`

const ProfileImage = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
`

const Name = styled.span`
  display: inline-block;
  font-family: ${fonts.header};
  font-size: ${fontSize.header}px;
  margin-left: 10px;
  transform: translateY(-15px);
`

const Logout = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
  cursor: pointer;
  font-family: ${fonts.header};
  font-size: ${fontSize.normal}px;
`

export default ({displayName, photo, logout}) => (
  <Container>
    <ProfileImage src={photo}/>
    <Name>{displayName}</Name>
    <Logout onClick={logout}>Logout</Logout>
  </Container>
)

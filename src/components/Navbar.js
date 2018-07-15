import React from 'react'
import styled from 'styled-components'

import {fonts, fontSize} from '../core/helper'

const Container = styled.div`
  margin: 30px;
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

const Menu = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
  cursor: pointer;
  font-family: ${fonts.header};
  font-size: ${fontSize.normal}px;

  & > div {
    display: inline-block;
    cursor: pointer;
    margin-left: 15px;
  }
`

export default ({displayName, photo, logout, setting}) => (
  <Container>
    <ProfileImage src={photo}/>
    <Name>{displayName}</Name>
    <Menu>
      <div onClick={setting}>Voice Setting</div>
      <div onClick={logout}>Logout</div>
    </Menu>
  </Container>
)

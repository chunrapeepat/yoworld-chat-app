import styled from 'styled-components'
import {fonts} from './helper'

export const Center = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

export const Container = styled.div`
  width: 500px;
  background: white;
  border-radius: 3px;
  padding: 15px 25px;
`

export const Heading = styled.h1`
  margin: 0;
  font-size: 28px;
  font-family: ${fonts.header};
`

export const FixedContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99;
  background: black;
`

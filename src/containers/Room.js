import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {userLogout} from '../ducks/user'
import Navbar from '../components/Navbar'

const Container = styled.div`
  padding: 30px;
`

class Room extends Component {
  render() {
    return (
      <Container>
        <Navbar logout={this.props.userLogout} displayName="Chun Rapeepat" photo="https://graph.facebook.com/984251461749210/picture"/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(userLogout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Room)

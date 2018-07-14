import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {userLogout} from '../ducks/user'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

const Container = styled.div`
  position: relative;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`

class Room extends Component {
  render() {
    return (
      <Container>
        <Navbar logout={this.props.userLogout} displayName="Chun Rapeepat" photo="https://graph.facebook.com/984251461749210/picture"/>
        <Grid>
          <Card photo="https://graph.facebook.com/984251461749210/picture?type=large"/>
          <Card photo="https://graph.facebook.com/984251461749210/picture?type=large"/>
          <Card photo="https://graph.facebook.com/984251461749210/picture?type=large"/>
          <Card photo="https://graph.facebook.com/984251461749210/picture?type=large"/>
          <Card photo="https://graph.facebook.com/984251461749210/picture?type=large"/>
          <Card photo="https://graph.facebook.com/984251461749210/picture?type=large"/>
          <Card photo="https://graph.facebook.com/984251461749210/picture?type=large"/>
          <Card photo="https://graph.facebook.com/984251461749210/picture?type=large"/>
          <Card photo="https://graph.facebook.com/984251461749210/picture?type=large"/>
          <Card photo="https://graph.facebook.com/984251461749210/picture?type=large"/>
          <Card photo="https://graph.facebook.com/984251461749210/picture?type=large"/>
          <Card photo="https://graph.facebook.com/984251461749210/picture?type=large"/>
        </Grid>
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

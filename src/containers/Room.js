import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {firestore} from '../core/client'
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
  state = {
    users: [],
  }

  getAllUser = async () => {
    const docUser = await firestore.collection('users').get()
    // return only user json data
    const users = docUser.docs.map(user => user.data())
    // update state
    this.setState({users})
  }

  componentDidMount = () => {
    this.getAllUser()
    // update new user in realtime
    firestore.collection('users').onSnapshot({
      includeMetadataChanges: true,
    }, doc => {
      this.getAllUser()
    })
  }

  render() {
    return (
      <Container>
        <Navbar logout={this.props.userLogout} displayName="Chun Rapeepat" photo="https://graph.facebook.com/984251461749210/picture"/>
        <Grid>
          {this.state.users.map((user, i) => {
            return <Card user={user} key={`user_${i}`}/>
          })}
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

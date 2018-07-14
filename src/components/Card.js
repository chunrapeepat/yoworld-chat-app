import React, {Component} from 'react'
import styled from 'styled-components'

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
  render() {
    const {photo} = this.props
    return (
      <Container>
        <Photo src={photo}/>
      </Container>
    )
  }
}

export default Card

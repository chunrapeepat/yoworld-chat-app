import React, {Component} from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'
import {Select, Slider, Button} from 'antd'

import {Center, Container, Heading, FixedContainer} from '../core/styled'
import {fonts, fontSize, speak} from '../core/helper'

const Option = Select.Option

const Label = styled.span`
  display: inline-block;
  margin-top: 15px;
  margin-bottom: 5px;
`

export default class extends Component {
  state = {
    voices: [],
    pitchValue: 1,
    voiceValue: '',
  }

  onVoiceChange = value => {
    this.setState({
      voiceValue: value,
    })
  }

  onPitchChange = value => {
    this.setState({
      pitchValue: value,
    })
  }

  componentDidMount = () => {
    const state = this
    window.speechSynthesis.onvoiceschanged = function() {
      const voices = window.speechSynthesis.getVoices()
      const onlyGoogle = voices.map(voice => voice.voiceURI).filter(voice => voice.split(' ')[0] === 'Google')
      state.setState({voices: onlyGoogle})
    }
  }

  voiceTest = () => {
    speak('Hello', this.state.pitchValue, this.state.voiceValue)
  }

  render = () => (
    <FixedContainer>
      <Center>
        <Container>
          <Heading>Setting up your voice</Heading>

          <Label>Select voices:</Label>
          <Select style={{width: '100%'}} onChange={this.onVoiceChange}>
            {this.state.voices.map((voice, i) => {
              return <Option key={`voice_${i}`} value={voice}>{voice}</Option>
            })}
          </Select>

          <Label>Select voice pitch:</Label>
          <Slider min={0} step={0.01} max={2} onChange={this.onPitchChange} value={this.state.pitchValue} />

          <br/>
          <Button style={{marginRight: '10px'}} type="primary">Finish</Button>
          <Button onClick={this.voiceTest}>Voice Test</Button>
        </Container>
      </Center>
    </FixedContainer>
  )
}

import React, {Component} from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'
import {Select, Slider, Button} from 'antd'

import {Center, Container, Heading, FixedContainer} from '../core/styled'
import {fonts, fontSize, speak, getRandomInt} from '../core/helper'

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
    const messages = [
      `If you're not an asshole this company dies`,
      `I know HTML. How to meet ladies`,
      `it's not a bug it's a feature`,
      `This is your mom, and you. you're not my baby.`,
    ]
    // speak example message
    speak(messages[getRandomInt(0, messages.length - 1)], this.state.pitchValue, this.state.voiceValue)
  }

  updateVoice = async () => {

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
          <Button onClick={this.updateVoice} style={{marginRight: '10px'}} type="primary">Finish</Button>
          <Button onClick={this.voiceTest}>Voice Test</Button>
        </Container>
      </Center>
    </FixedContainer>
  )
}

import styled, {css} from 'styled-components'
// style global variable and function belong here

export const fonts = {
  header: `'Gaegu', cursive`,
  normal: `sans-sans-serif`,
}

export const fontSize = {
  header: 25,
  normal: 22,
}

// all helper function
const sizes = {
  giant: 1170,
  desktop: 1000,
  tablet: 600,
  phone: 376,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label]
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export const speak = (message, pitch = 1, voice) => {
  const msg = new SpeechSynthesisUtterance()
  const voices = window.speechSynthesis.getVoices()
  // map voice from string
  msg.voice = voices[voices.map(v => v.voiceURI).indexOf(voice)]
  msg.pitch = pitch
  msg.text = message

  speechSynthesis.speak(msg)
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// creates a reducer from an initial state and a handler function.
export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) =>
    handlers(state)[action.type]
      ? handlers(state)[action.type](action.payload)
      : state
}

// creates an action that return object with type
export const createAction = type => {
  return payload => (payload ? {type, payload} : {type})
}

// creates an action type with namespace
export const createActionType = namespace => action => `${namespace}/${action}`

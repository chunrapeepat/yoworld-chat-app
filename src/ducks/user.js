import {createReducer, createAction, createActionType} from '../core/helper'

// assign namespace to constant creator
const create = createActionType('user')

export const USER_LOGIN = create('USER_LOGIN')
export const USER_LOGOUT = create('USER_LOGOUT')

// create actions
export const userLogin = createAction(USER_LOGIN)
export const userLogout = createAction(USER_LOGOUT)

// initial state
const initial = {
  user: null,
}

export const userReducer = createReducer(initial, state => ({
  [USER_LOGIN]: user => {
    return {
      ...state,
      user,
    }
  },
  [USER_LOGOUT]: () => {
    return initial
  },
}))

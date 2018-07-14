import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {userReducer} from './user'

export const reducers = combineReducers({
  user: userReducer,
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

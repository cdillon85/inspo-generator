import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  time: require('./time').default,
})

export default rootReducer

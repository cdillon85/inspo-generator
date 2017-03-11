import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  time: require('./time').default,
  prompts: require('./prompts').default
})

export default rootReducer

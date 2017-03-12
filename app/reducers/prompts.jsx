import axios from 'axios'
import {browserHistory} from 'react-router'

//constants
const PROMPT_TYPE = 'PROMPT_TYPE'
const CURRENT_PROMPT = 'CURRENT_PROMPT'

//action creators
export const promptType = id => ({
	type: PROMPT_TYPE,
	id
})

export const currentPrompt = inspoObj => ({
	type: CURRENT_PROMPT,
	inspoObj
})

//Initial State
const initialState = {
	prompts: [],
	promptType: null,
	currentPrompt: {},
	pastPrompts4: [],
	pastPrompts6: []
}

//reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {

		case PROMPT_TYPE:
			return Object.assign({}, state, {promptType: action.id})

		case CURRENT_PROMPT:
			return Object.assign({}, state, {currentPrompt: action.inspoObj})

		default:
			return state
	}
}

//thunk functions

export const selectPrompt = (id) =>
	(dispatch, getState) => {
		dispatch(promptType(id))
		let time = getState().time
		if (time === 4) {
		axios.get(`/api/prompts/less/${id}`)
		.then(res => res.data)
		.then(inspos => {
			let randomIndex = Math.ceil(Math.random() * inspos.length)
			dispatch(currentPrompt(inspos[randomIndex]))
			browserHistory.push('/inspo')
		})
		.catch(error => console.error('Error fetching inspo from database', error))
		} else if (time === 6) {
		axios.get(`/api/prompts/more/${id}`)
		.then(res => res.data)
		.then(inspos => {
			let randomIndex = Math.ceil(Math.random() * inspos.length)
			dispatch(currentPrompt(inspos[randomIndex]))
			browserHistory.push('/inspo')

		})
		.catch(error => console.error('Error fetching inspo from database', error))
		}
	}

export default reducer








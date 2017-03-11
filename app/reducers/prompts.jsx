import axios from 'axios'

//constants
const ALL_PROMPTS = 'ALL_PROMPTS'
const PROMPT_TYPE = 'PROMPT_TYPE'
const CURRENT_PROMPT = 'CURRENT_PROMPT'

//action creators
export const allPrompts = prompts => ({
	type: ALL_PROMPTS,
	prompts
})

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
		case ALL_PROMPTS:
			return Object.assign({}, state, {prompts: action.prompts})

		case PROMPT_TYPE:
			return Object.assign({}, state, {promptType: action.id})

		case CURRENT_PROMPT:
			return Object.assign({}, state, {currentPrompt: action.inspoObj})

		default:
			return state
	}
}

//thunk functions
export const getAllPrompts = () =>
	dispatch => {
		axios.get('/api/prompts/')
		.then(res => res.data)
		.then(prompts => {
			dispatch(allPrompts(prompts))})
		.catch(error => console.error('Error fetching prompts from database', error))
	}

export const selectPrompt = (id) =>
	(dispatch, getState) => {
		console.log(id)
		dispatch(promptType(id))
		let time = getState().time
		axios.get(`/api/prompts/${id}/${time}`)
		.then(res => res.data)
		.then(inspos => {
			let randomIndex = Math.floor(Math.random() * inspos.length)
			dispatch(currentPrompt(inspos[randomIndex]))
		})
		.catch(error => console.error('Error fetching inspo from database', error))
	}

export default reducer








import axios from 'axios'

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
		if (id === 12){
			id = Math.floor(Math.random() * 11)
		}
		axios.get(`/api/prompts/${id}/${time}`)
		.then(res => res.data)
		.then(inspos => {
			let randomIndex = Math.ceil(Math.random() * inspos.length)
			dispatch(currentPrompt(inspos[randomIndex]))
		})
		.catch(error => console.error('Error fetching inspo from database', error))
	}

export default reducer








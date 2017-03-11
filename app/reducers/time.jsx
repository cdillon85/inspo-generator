//constants
const UPDATE_TIME = 'UPDATE_TIME'

//action creators
export const updateTime = time => ({
	type: UPDATE_TIME,
	time
})

//reducer
const reducer = (state = null, action) => {
	switch (action.type) {
		case UPDATE_TIME:
			return action.time
		default:
			return state
	}
}

//thunk functions
export const updateInspoTime = (time) =>
	dispatch => dispatch(updateTime(time))

export default reducer

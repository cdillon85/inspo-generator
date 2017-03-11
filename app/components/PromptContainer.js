import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import PromptComponent from './PromptComponent'
import {selectPrompt} from '../reducers/prompts'


const mapStateToProps = (state) => {
	return {
		prompts: state.prompts.prompts
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		selectPromptById(id){
			dispatch(selectPrompt(id))
		}
	}
}

class PromptContainer extends React.Component {
	constructor(props){
		super (props)
		this.state = {
		}
		this.handleClick = this.handleClick.bind(this)
	}

handleClick (value){
	browserHistory.push(value)
}

render () {
	return (
		<div>
		<PromptComponent handleClick={this.handleClick} {...this.props} />
		</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PromptContainer)


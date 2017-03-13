import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import InspoComponent from './InspoComponent'
import {promptType, currentPrompt} from '../reducers/prompts'
import {updateTime} from '../reducers/time'


const mapStateToProps = (state) => {
	return {
		currentInspo: state.prompts.currentPrompt
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updatePromptType (){
			dispatch(promptType(null))
		},
		updateCurrentPrompt (){
			dispatch(currentPrompt({}))
		},
		updateTimeSelection (){
			dispatch(updateTime(null))
		}
	}
}

class InspoContainer extends React.Component {
	constructor(props){
		super (props)
		this.state = {
			show: true
		}
		this.handleClick = this.handleClick.bind(this)
		this.onClick = this.onClick.bind(this)
	}



handleClick (value){
	browserHistory.push(value)
}

onClick (){
	this.setState({
		show: false
	})
}

render () {
	return (
		<div>
		<InspoComponent
			updateCurrentPrompt={this.props.updateCurrentPrompt}
			updateTimeSelection={this.props.updateTimeSelection}
			updatePromptType={this.props.updatePromptType}
			handleClick={this.handleClick}
			show={this.state.show}
			onClick={this.onClick}
			{...this.props} />
		</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InspoContainer)


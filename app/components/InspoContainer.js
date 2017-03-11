import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import InspoComponent from './InspoComponent'


const mapStateToProps = (state) => {
	return {
		currentInspo: state.prompts.currentPrompt
	}
}

class InspoContainer extends React.Component {
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
		<InspoComponent handleClick={this.handleClick} {...this.props} />
		</div>
		)
	}
}

export default connect(mapStateToProps, null)(InspoContainer)


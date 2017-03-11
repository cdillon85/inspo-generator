import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import GreetingComponent from './GreetingComponent'


class GreetingContainer extends React.Component {
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
		<GreetingComponent handleClick={this.handleClick} />
		</div>
		)
	}
}

export default connect(null, null)(GreetingContainer)


import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'


const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

class AppContainer extends React.Component {
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
		<div>{React.cloneElement(this.props.children, {
			handleClick: this.handleClick
		})}</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)


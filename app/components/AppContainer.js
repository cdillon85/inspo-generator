import React from 'react'
import {connect} from 'react-redux'


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
	}


render () {
	return (
		<div>{this.props.children}</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)


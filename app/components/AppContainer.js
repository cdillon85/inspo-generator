import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {updateInspoTime} from '../reducers/time'


const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateInspoTimeSelected(time){
			dispatch(updateInspoTime(time))
		}
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
		<div>
		{React.cloneElement(this.props.children, {
			handleClick: this.handleClick,
			updateInspoTime: this.props.updateInspoTimeSelected
		})}
		</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)


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
		<InspoComponent handleClick={this.handleClick} show={this.state.show} onClick={this.onClick} {...this.props} />
		</div>
		)
	}
}

export default connect(mapStateToProps, null)(InspoContainer)


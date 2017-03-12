import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const TimeComponent = (props) => {
const handleClick = props.handleClick
const updateInspoTime = props.updateInspoTime
	return (
	<div>
		<div className="headline-container">
		<ReactCSSTransitionGroup
				transitionName="headline-animate"
				transitionAppear={true}
				transitionAppearTimeout={2000}
				transitionEnterTimeout={2000}
				transitionLeaveTimeout={2000}>
			<h1 key={1}className="headline">How much time do you have?</h1>
		</ReactCSSTransitionGroup>
		<ReactCSSTransitionGroup
				transitionName="btn-fade"
				transitionAppear={true}
				transitionAppearTimeout={2000}
				transitionEnterTimeout={2000}
				transitionLeaveTimeout={2000}>
			<div key={2}className="single-btn-container">
				<div key={3} className="time-single-btn" onClick={() => { handleClick('/prompts'); updateInspoTime(4)} }>Less than 5 Minutes</div>
			</div>
			<br />
			<div key={4} className="single-btn-container">
				<div key={5} className="time-single-btn" onClick={() => { handleClick('/prompts'); updateInspoTime(6)} }>More than 5 Minutes</div>
			</div>
		</ReactCSSTransitionGroup>
		</div>
	</div>

	)
}

export default TimeComponent

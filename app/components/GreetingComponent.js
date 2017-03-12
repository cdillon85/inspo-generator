import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const GreetingComponent = (props) => {
const handleClick = props.handleClick
	return (
	<div>
		<div className="headline-container">
		<ReactCSSTransitionGroup
			transitionName="headline-animate"
			transitionAppear={true}
			transitionAppearTimeout={2000}
			transitionEnterTimeout={false}
			transitionLeaveTimeout={false}>
			<h1 key={1} className="headline">Need Some Inspiration?</h1>
			</ReactCSSTransitionGroup>

			<div className="single-btn-container">
			<ReactCSSTransitionGroup
			transitionName="btn-fade-animate"
			transitionAppear={true}
			transitionAppearTimeout={4000}
			transitionEnterTimeout={false}
			transitionLeaveTimeout={false}>
			<div key={2} className="greeting-single-btn" onClick={() => handleClick('/time')} >Yes please!</div>
			</ReactCSSTransitionGroup>
			</div>
		</div>
	</div>

	)
}

export default GreetingComponent

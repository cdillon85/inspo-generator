import React from 'react'

const TimeComponent = (props) => {
const handleClick = props.handleClick
	return (
	<div>
		<div className="headline-container">
			<h1 className="headline">How much time do you have?</h1>
			<div className="single-btn-container">
			<div className="single-btn" onClick={() => handleClick('/prompts')}>Less than 5 Minutes</div>
			</div>
			<br/>
			<div className="single-btn-container">
			<div className="single-btn" onClick={() => handleClick('/prompts')}>More than 5 Minutes</div>
			</div>
		</div>
	</div>

	)
}

export default TimeComponent

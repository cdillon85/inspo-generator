import React from 'react'

const TimeComponent = (props) => {

	return (
	<div>
	{console.log('greeting')}
		<div className="headline-container">
			<h1 className="headline">How much time do you have?</h1>
			<div className="single-btn-container">
			<div className="single-btn">Less than 5 Minutes</div>
			</div>
			<br/>
			<div className="single-btn-container">
			<div className="single-btn">More than 5 Minutes</div>
			</div>
		</div>
	</div>

	)
}

export default TimeComponent

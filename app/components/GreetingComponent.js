import React from 'react'

const GreetingComponent = (props) => {
const handleClick = props.handleClick
	return (
	<div>
		<div className="headline-container">
			<h1 className="headline">Need Some Inspiration?</h1>
			<div className="single-btn-container">
			<div className="greeting-single-btn" onClick={() => handleClick('/time')} >Yes please!</div>
			</div>
		</div>
	</div>

	)
}

export default GreetingComponent

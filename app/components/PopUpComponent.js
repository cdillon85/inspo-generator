import React from 'react'
const PopUpComponent = (props) => {
const onClickHandler = props.onClick
	return (
		<div className="pop-up">
		Did you know that you can highlight text and share it with friends? Try it out!
		<div className="pop-up-btn-container">
		<div className="pop-up-btn" onClick={() => onClickHandler()} >Got It!</div>
		</div>
		</div>
		)
}

export default PopUpComponent

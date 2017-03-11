import React from 'react'

const PromptComponent = (props) => {
	const handleClick = props.handleClick
	const prompts = props.prompts
	const selectPrompt = props.selectPromptById
	return (
	<div>
		<div className="headline-container">
			<h1 className="headline">How do you feel today?</h1>
		</div>
			<div className="prompt-container">
				{prompts.length && prompts.map(prompt => ( <div className="prompt" key={prompt.id} onClick={() => { selectPrompt(prompt.id); handleClick('/inspo')}}>{prompt.Text}</div>))}
			</div>
	</div>

	)
}

export default PromptComponent

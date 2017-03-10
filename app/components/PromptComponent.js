import React from 'react'

const PromptComponent = (props) => {

		const prompts = [{id: 1, text: 'My heart is broken.'}, {id: 2, text: 'Nothing ever goes right for me.'},
					{id: 3, text: 'I am completed stressed out.'}, {id: 4, text: 'My self image could use a boost.'},
					{id: 5, text: 'I am unmotivated.'}, {id: 6, text: 'I am afraid to step outside my comfort zone.'},
					{id: 7, text: 'My life is great, no complaints here!'}, {id: 8, text: 'The state of the world depresses me.'},
					{id: 9, text: 'I dunno, things are alright I guess?'}, {id: 10, text: 'I am angry at someone or something in my life.'},
					{id: 11, text: 'TBD'}, {id: 12, text: 'TBD'}]
	return (
	<div>
		<div className="headline-container">
			<h1 className="headline">How do you feel today?</h1>
		</div>
		<div className="prompt-container">
		{prompts.map(prompt => ( <div className="prompt" key={prompt.id}>{prompt.text}</div>))}
		</div>
	</div>

	)
}

export default PromptComponent

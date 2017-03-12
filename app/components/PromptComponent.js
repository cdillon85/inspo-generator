import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const PromptComponent = (props) => {
	const handleClick = props.handleClick
	const selectPrompt = props.selectPromptById
	return (
	<div>

		<div className="headline-container">
		<ReactCSSTransitionGroup
			transitionName="headline-animate"
			transitionAppear={true}
			transitionAppearTimeout={2000}
			transitionEnterTimeout={2000}
			transitionLeaveTimeout={2000}>
			<h1 key={1} className="headline">How do you feel today?</h1>
		</ReactCSSTransitionGroup>
		</div>

    		<div className="prompt-container">
			<ReactCSSTransitionGroup
				transitionName="btn-fade"
				transitionAppear={true}
				transitionAppearTimeout={2000}
				transitionEnterTimeout={2000}
				transitionLeaveTimeout={2000}>
				<div className="prompt" key={1} onClick={() =>
					{ selectPrompt(1); handleClick('/inspo')}}>My self image could use a boost.
				</div>
				<div className="prompt" key={2} onClick={() =>
					{ selectPrompt(2); handleClick('/inspo')}}>My heart is broken.
				</div>
				<div className="prompt" key={3} onClick={() =>
					{ selectPrompt(3); handleClick('/inspo')}}>I worry I am not good enough.
				</div>
				<div className="prompt" key={4} onClick={() =>
					{ selectPrompt(4); handleClick('/inspo')}}>I am completely stressed out.
				</div>
				<div className="prompt" key={5} onClick={() =>
					{ selectPrompt(5); handleClick('/inspo')}}>I am feeling unmotivated.
				</div>
				<div className="prompt" key={6} onClick={() =>
					{ selectPrompt(6); handleClick('/inspo')}}>My life is great, no complaints here!
				</div>
				<div className="prompt" key={7} onClick={() =>
					{ selectPrompt(7); handleClick('/inspo')}}>The state of the world depresses me.
				</div>
				<div className="prompt" key={8} onClick={() =>
					{ selectPrompt(8); handleClick('/inspo')}}>I am angry at someone or something in my life.
				</div>
				<div className="prompt" key={9} onClick={() =>
					{ selectPrompt(9); handleClick('/inspo')}}>I am afraid to step outside my comfort zone.
				</div>
				<div className="prompt" key={10} onClick={() =>
					{ selectPrompt(10); handleClick('/inspo')}}>Nothing ever goes right for me.
				</div>
				<div className="prompt" key={11} onClick={() =>
					{ selectPrompt(11); handleClick('/inspo')}}>I am struggling with loss or grief
				</div>
				<div className="prompt" key={12} onClick={() =>
					{ selectPrompt(12); handleClick('/inspo')}}>Not sure, give me some random inspo.
				</div>
			</ReactCSSTransitionGroup>
			</div>
	</div>

	)
}

export default PromptComponent

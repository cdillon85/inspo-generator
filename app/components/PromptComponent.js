import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const PromptComponent = (props) => {
	const selectPrompt = props.selectPromptById
	return (
		<div>

		<div className="headline-container">
		<ReactCSSTransitionGroup
		transitionName="headline-animate"
		transitionAppear={true}
		transitionAppearTimeout={1000}
		transitionEnter={false}
		transitionLeave={false}>
		<h1 key={1} className="headline">How do you feel today?</h1>
		</ReactCSSTransitionGroup>
		</div>

		<div className="prompt-container">
		<ReactCSSTransitionGroup
		transitionName="btn-fade"
		transitionAppear={true}
		transitionAppearTimeout={1000}
		transitionEnter={false}
		transitionLeave={false}>
		<div
		className="prompt" key={1} onClick={() =>
			{ selectPrompt(1) }}>My self image could use a boost.
			</div>
			<div
			className="prompt" key={2} onClick={() =>
				{ selectPrompt(2) }}>My heart is broken.
				</div>
				<div
				className="prompt" key={3} onClick={() =>
					{ selectPrompt(3) }}>I worry I am not good enough.
					</div>
					<div
					className="prompt" key={4} onClick={() =>
						{ selectPrompt(4) }}>I am completely stressed out.
						</div>
						<div
						className="prompt" key={5} onClick={() =>
							{ selectPrompt(5) }}>I am feeling unmotivated.
							</div>
							<div
							className="prompt" key={6} onClick={() =>
								{ selectPrompt(6) }}>My life is great, no complaints here!
								</div>
								<div
								className="prompt" key={7} onClick={() =>
									{ selectPrompt(7) }}>The state of the world depresses me.
									</div>
									<div
									className="prompt" key={8} onClick={() =>
										{ selectPrompt(8) }}>I am angry at someone or something in my life.
										</div>
										<div
										className="prompt" key={9} onClick={() =>
											{ selectPrompt(9) }}>I am afraid to step outside my comfort zone.
											</div>
											<div
											className="prompt" key={10} onClick={() =>
												{ selectPrompt(10) }}>Nothing ever goes right for me.
												</div>
												<div
												className="prompt" key={11} onClick={() =>
													{ selectPrompt(11) }}>I am struggling with loss or grief
													</div>
													<div
													className="prompt" key={12} onClick={() =>
														{ selectPrompt(6) }}>Not sure, give me some random inspo.
														</div>
														</ReactCSSTransitionGroup>
														</div>
														</div>

														)
}

export default PromptComponent

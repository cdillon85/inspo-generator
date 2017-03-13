import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PopUpComponent from './PopUpComponent'


const InspoComponent = (props) => {
	const handleClick = props.handleClick
	const inspo = props.currentInspo
	const show = props.show
	const onClick = props.onClick
	const currentPrompt = props.updateCurrentPrompt
	const promptType = props.updatePromptType
	const updateTime = props.updateTimeSelection

	if (inspo.id === undefined) {
		return (
			<div>
			<div className="headline-container">
			<ReactCSSTransitionGroup
			transitionName="headline-animate"
			transitionAppear={true}
			transitionAppearTimeout={1000}
			transitionEnter={false}
			transitionLeave={false}>
			<h1 className="headline">Let's get inspired!</h1>
			</ReactCSSTransitionGroup>
			</div>
			<ReactCSSTransitionGroup
			transitionName="btn-animate"
			transitionAppear={true}
			transitionAppearTimeout={1000}
			transitionEnter={false}
			transitionLeave={false}>
			<div className="inspo-container">
			<div
			className="inspo-btn" onClick={() => {promptType()
				currentPrompt(); updateTime()
				handleClick('/time')}}>Start Here</div>
				</div>
				</ReactCSSTransitionGroup>
				</div>

				)
	} else if (inspo.Time === 4){
		return (
			<div>
			<div className="headline-container">
			<ReactCSSTransitionGroup
			transitionName="headline-animate"
			transitionAppear={true}
			transitionAppearTimeout={1000}
			transitionEnter={false}
			transitionLeave={false}>
			<h1 className="headline">How about this?</h1>
			</ReactCSSTransitionGroup>
			</div>

			{show === true ? <PopUpComponent onClick={onClick} /> : null }

			<div className="inspo-container">
			<ReactCSSTransitionGroup
			transitionName="headline-animate"
			transitionAppear={true}
			transitionAppearTimeout={1000}
			transitionEnter={false}
			transitionLeave={false}>
			<div className="inspo-quote">
			<div className="inspo-quote">"{inspo.Text}"</div>
			<div className="inspo-quote">~{inspo.Author}</div>
			</div>
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
			transitionName="btn-animate"
			transitionAppear={true}
			transitionAppearTimeout={1000}
			transitionEnter={false}
			transitionLeave={false}>
			<div className="inspo-btn"><a href={inspo.URL}>Want to learn more?</a></div>
			<div
			className="inspo-btn" onClick={() => {promptType()
				currentPrompt(); updateTime()
				handleClick('/')}}>Start Over</div>
				</ReactCSSTransitionGroup>
				</div>
				</div>

				)
	} else {
		return (
			<div>
			<div className="headline-container">
			<ReactCSSTransitionGroup
			transitionName="headline-animate"
			transitionAppear={true}
			transitionAppearTimeout={1000}
			transitionEnter={false}
			transitionLeave={false}>
			<h1 className="headline">How about this?</h1>
			</ReactCSSTransitionGroup>
			</div>

			{show === true ? <PopUpComponent onClick={onClick} /> : null }

			<div className="inspo-container">
			<ReactCSSTransitionGroup
			transitionName="headline-animate"
			transitionAppear={true}
			transitionAppearTimeout={1000}
			transitionEnter={false}
			transitionLeave={false}>
			<div className="inspo-blurb">
			<div >"{inspo.Text}"</div>
			<div  className="inspo-author-blurb">~{inspo.Author}</div>
			</div>
			</ReactCSSTransitionGroup>
			<ReactCSSTransitionGroup
			transitionName="btn-animate"
			transitionAppear={true}
			transitionAppearTimeout={1000}
			transitionEnter={false}
			transitionLeave={false}>
			<div className="inspo-btn"><a href={inspo.URL}>Want to read more?</a></div>
			<div
			className="inspo-btn" onClick={() => {promptType()
				currentPrompt(); updateTime()
				handleClick('/')}}>Start Over</div>
				</ReactCSSTransitionGroup>
				</div>
				</div>
				)

	}
}

export default InspoComponent

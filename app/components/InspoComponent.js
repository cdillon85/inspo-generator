import React from 'react'

const InspoComponent = (props) => {
	const handleClick = props.handleClick
	const inspo = props.currentInspo
	
if (inspo.Time === 4){
	return (
	<div>
		<div className="headline-container">
			<h1 className="headline">How about this?</h1>
		</div>
		<div className="inspo-container">
		<div className="inspo-quote">
			<div className="inspo-quote">"{inspo.Text}"</div>
			<div className="inspo-author">~{inspo.Author}</div>
			<div className="inspo-btn"><a href={inspo.URL}>Want to learn more?</a></div>
			<div className="inspo-btn" onClick={() => handleClick('/')}>Start Over</div>
		</div>
		</div>
	</div>

	)
} else {
	return (
		<div>
			<div className="headline-container">
				<h1 className="headline">How about this?</h1>
			</div>
			<div className="inspo-container">
			<div className="inspo-blurb">
				<div>"{inspo.Text}"</div>
				<div className="inspo-author-blurb">~{inspo.Author}</div>
			</div>	
				<div className="inspo-btn"><a href={inspo.URL}>Want to read more?</a></div>
				<div className="inspo-btn" onClick={() => handleClick('/')}>Start Over</div>
			</div>
		</div>

		)

	}
}

export default InspoComponent

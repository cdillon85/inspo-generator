import React from 'react'

const InspoComponent = (props) => {
	const handleClick = props.handleClick

	// const inspoQuote = {id:1, text:"You are never alone or helpless. The force that guides the stars guides you too.", author:"Shrii Shrii Anandamurti", moreInfoURL:"https://en.wikipedia.org/wiki/Prabhat_Ranjan_Sarkar"}
	const inspoBlurb = {id:1, text:"If you want to radically change your life, strengthen your faith that we live in an abundant, benevolent Universe by being grateful for everything you've already manifested and all the good that's hurlting toward you. Be grateful that you have the power to manifest any reality you desire and then leap into the void to go get it. If you want to radically change your life, strengthen your faith that we live in an abundant, benevolent Universe by being grateful for everything you've already manifested and all the good that's hurlting toward you. Be grateful that you h. If you want to radically change your life, strengthen your faith that we live in an abundant, benevolent Universe by being grateful for everything you've already manifested and all the good that's hurlting toward you. Be grateful that you h.", author:"Jen Sincero", from:"You Are A Badass", moreInfoURL:"https://www.amazon.com/You-Are-Badass-Doubting-Greatness/dp/0762447699"}
	
// if (inspoQuote){
// 	return (
// 	<div>
// 		<div className="headline-container">
// 			<h1 className="headline">How about this?</h1>
// 		</div>
// 		<div className="inspo-container">
// 		<div className="inspo-quote">
// 			<div className="inspo-quote">"{inspoQuote.text}"</div>
// 			<div className="inspo-author">~{inspoQuote.author}</div>
// 			<div className="inspo-btn">Want to learn more?</div>
// 			<div className="inspo-btn">Start Over</div>
// 		</div>
// 		</div>
// 	</div>

// 	)
// else if (inspoBlurb) {
	return (
		<div>
			<div className="headline-container">
				<h1 className="headline">How about this?</h1>
			</div>
			<div className="inspo-container">
			<div className="inspo-blurb">
				<div>"{inspoBlurb.text}"</div>
				<div className="inspo-author-blurb">~{inspoBlurb.author}</div>
			</div>	
				<div className="inspo-btn"><a href={inspoBlurb.moreInfoURL}>Want to read more?</a></div>
				<div className="inspo-btn" onClick={() => handleClick('/')}>Start Over</div>
			</div>
		</div>

		)
// }


}

export default InspoComponent

'use strict'
import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import GreetingContainer from './components/GreetingContainer'
import TimeContainer from './components/TimeContainer'
import PromptContainer from './components/PromptContainer'
import InspoContainer from './components/InspoContainer'

import store from './store'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
	    <Route path="/" component={GreetingContainer} />
	    <Route path="/time" component={TimeContainer} />
	    <Route path="/prompts" component={PromptContainer} />
	    <Route path="/inspo" component={InspoContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
)

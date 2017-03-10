'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import AppContainer from './components/AppContainer'
import GreetingComponent from './components/GreetingComponent'
import TimeComponent from './components/TimeComponent'
import PromptComponent from './components/PromptComponent'
import InspoComponent from './components/InspoComponent'

import store from './store'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
	    <IndexRedirect to="/greeting" />
	    <Route path="/greeting" component={GreetingComponent} />
      <Route path="/time" component={TimeComponent} />
      <Route path="/prompts" component={PromptComponent} />
	    <Route path="/inspo" component={InspoComponent} />
    </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

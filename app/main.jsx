'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import AppContainer from './components/AppContainer'

import store from './store'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
    </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
    </Router>
  </Provider>,
  document.getElementById('app')
)

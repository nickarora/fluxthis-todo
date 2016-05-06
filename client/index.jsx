import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './components/app.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'

const rootEl = document.querySelector('#root')

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
    </Route>
  </Router>
), rootEl)

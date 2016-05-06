import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './components/app.jsx'
import TodosView from './components/todosview.jsx'

const rootEl = document.querySelector('#root')

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={TodosView} />
    </Route>
  </Router>
), rootEl)

import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './components/app.jsx'
import TodoList from './components/todolist.jsx'

const rootEl = document.querySelector('#root')

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={TodoList} />
    </Route>
  </Router>
), rootEl)

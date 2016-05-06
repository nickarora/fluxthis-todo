/* eslint-disable new-cap, react/prefer-es6-class */
import React from 'react'
import ImmutableStore from 'fluxthis/src/ImmutableStore'
import TodosList from './todoslist'

const Immutable = ImmutableStore.Immutable

import { Col, Row } from 'react-bootstrap'

const TodosView = React.createClass({
  getInitialState() {
    return {
      todos: Immutable.List([
        Immutable.Map({
          note: 'note1',
        }),
        Immutable.Map({
          note: 'note2',
        }),
      ]),
    }
  },
  render() {
    return (
      <Row>
        <Col xs={12}>
          <h2>Todos</h2>
          <TodosList todos={this.state.todos} />
        </Col>
      </Row>
    )
  },
})

export default TodosView

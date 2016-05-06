/* eslint-disable new-cap, react/prefer-es6-class */
import React, { PropTypes } from 'react'
import TodosList from './todoslist'
import TodosAPIActions from '../actions/todos-api'

import { Col, Row } from 'react-bootstrap'

const TodosView = React.createClass({
  propTypes: {
    todos: PropTypes.object,
  },

  componentWillMount() {
    TodosAPIActions.getTodos()
  },

  render() {
    return (
      <Row>
        <Col xs={12}>
          <h2>Todos</h2>
          <TodosList todos={this.props.todos} />
        </Col>
      </Row>
    )
  },
})

export default TodosView

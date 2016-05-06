/* eslint-disable new-cap react/prefer-es6-class */
import React, { PropTypes } from 'react'
import TodosList from './todoslist'

import { Col, Row } from 'react-bootstrap'

const TodosView = (props) =>
  <Row>
    <Col xs={12}>
      <h2>Todos</h2>
      <TodosList todos={props.todos} />
    </Col>
  </Row>


TodosView.propTypes = {
  todos: PropTypes.object,
}

export default TodosView

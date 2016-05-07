/* eslint-disable new-cap, react/prefer-es6-class */
import React, { PropTypes } from 'react'
import TodosList from './todoslist'
import TodosAPIActions from '../actions/todos-api'

import { Col, Row, FormGroup, FormControl, Button } from 'react-bootstrap'

const TodosView = React.createClass({
  propTypes: {
    todos: PropTypes.object,
  },

  getInitialState() {
    return {
      newTodoText: '',
    }
  },

  componentWillMount() {
    TodosAPIActions.getTodos()
  },

  updateTodoText(e) {
    this.setState({ newTodoText: e.target.value })
  },

  createNewTodo(e) {
    e.preventDefault()
    TodosAPIActions.addTodo({
      note: this.state.newTodoText,
      complete: false,
    })
    this.setState({ newTodoText: '' })
  },

  deleteTodo(todo) {
    TodosAPIActions.deleteTodo(todo)
  },

  render() {
    return (
      <Row>
        <Col xs={8}>
          <h2>Todos</h2>
          <form onSubmit={this.createNewTodo}>
            <FormGroup controlId='newTodoText'>
              <FormControl
                type='text'
                placeholder='I need to...'
                value={this.state.newTodoText}
                onChange={this.updateTodoText}
              />
            </FormGroup>
            <Button type='submit'>
              Submit
            </Button>
          </form>
          <br />
          <TodosList
            todos={this.props.todos}
            deleteTodo={this.deleteTodo}
          />
        </Col>
      </Row>
    )
  },
})

export default TodosView

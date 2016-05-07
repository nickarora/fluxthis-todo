import React, { PropTypes } from 'react'

const Todo = ({ todo }) =>
  <li key={todo.get('id')}>{todo.get('note')}</li>

Todo.propTypes = {
  todo: PropTypes.object, // ImmutableJS Map
}

export default Todo

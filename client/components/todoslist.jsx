import React, { PropTypes } from 'react'
import Todo from './todo'

const TodosList = (props) =>
  <ul>
    {props.todos.map(todo =>
      <Todo todo={todo} />
    )}
  </ul>

TodosList.propTypes = {
  todos: PropTypes.object, // ImmutableJS List<Map>
}

export default TodosList

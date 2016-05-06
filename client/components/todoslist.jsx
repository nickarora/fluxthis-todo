import React, { PropTypes } from 'react'
// import { Immutable } from 'fluxthis/src/ImmutableStore'
// import Todo from './todo'

const TodosList = (props) =>
  <ul>
    {props.todos.map(todo =>
      <li key={todo.get('note')}>{todo.get('note')}</li>
    )}
  </ul>

TodosList.propTypes = {
  todos: PropTypes.object, // ImmutableJS List<Map>
}

export default TodosList

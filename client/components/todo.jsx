import React, { PropTypes } from 'react'

import { Button, ButtonGroup } from 'react-bootstrap'

const Todo = ({ todo, deleteTodo }) =>
  <tr>
    <td>
      <h5
        className={todo.get('complete') ? 'todo-complete' : ''}
      >
        {todo.get('note')}
      </h5>
      <ButtonGroup>
        <Button>✓</Button>
        <Button onClick={deleteTodo}>x</Button>
      </ButtonGroup>
    </td>
  </tr>

Todo.propTypes = {
  todo: PropTypes.object.isRequired, // ImmutableJS Map,
  deleteTodo: PropTypes.func.isRequired,
}

export default Todo

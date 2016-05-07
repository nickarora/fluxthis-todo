import React, { PropTypes } from 'react'
import { Table } from 'react-bootstrap'
import Todo from './todo'

const TodosList = ({ todos, deleteTodo }) =>
  <Table striped bordered condensed hover>
    <tbody>
      {todos.map(todo =>
        <Todo
          key={todo.get('id')}
          todo={todo}
          deleteTodo={() => deleteTodo(todo)}
        />
      )}
    </tbody>
  </Table>

TodosList.propTypes = {
  todos: PropTypes.object, // ImmutableJS List<Map>
  deleteTodo: PropTypes.func.isRequired,
}

export default TodosList

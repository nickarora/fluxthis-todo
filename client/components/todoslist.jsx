import React, { PropTypes } from 'react'
import { Table } from 'react-bootstrap'
import Todo from './todo'

const toggle = (todo) => todo.set('complete', !todo.get('complete'))

const TodosList = ({ todos, deleteTodo, updateTodo }) =>
  <Table striped bordered condensed hover>
    <tbody>
      {todos.map(todo =>
        <Todo
          key={todo.get('id')}
          todo={todo}
          deleteTodo={() => deleteTodo(todo)}
          toggleTodo={() => updateTodo(toggle(todo))}
        />
      )}
    </tbody>
  </Table>

TodosList.propTypes = {
  todos: PropTypes.object, // ImmutableJS List<Map>
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
}

export default TodosList

import APIActionCreator from 'fluxthis/src/APIActionCreator'
import ACTION_TYPES from '../constants/action-types'

const baseUrl = 'http://localhost:8000'

const TodosAPIActions = new APIActionCreator({
  displayName: 'TodosAPIActionCreator',

  getTodos: {
    route: `${baseUrl}/api/todos`,
    method: 'GET',
    pending: ACTION_TYPES.GET_TODOS_PENDING,
    success: ACTION_TYPES.GET_TODOS_SUCCESS,
    failure: ACTION_TYPES.GET_TODOS_FAILURE,
  },

  addTodo: {
    route: `${baseUrl}/api/todos`,
    method: 'POST',
    pending: ACTION_TYPES.ADD_TODO_PENDING,
    success: ACTION_TYPES.ADD_TODO_SUCCESS,
    failure: ACTION_TYPES.ADD_TODO_FAILURE,
    createRequest(todo) {
      return {
        body: {
          todo,
        },
      }
    },
  },

  updateTodo: {
    route: `${baseUrl}/api/todos`,
    method: 'PUT',
    pending: ACTION_TYPES.UPDATE_TODO_PENDING,
    success: ACTION_TYPES.UPDATE_TODO_SUCCESS,
    failure: ACTION_TYPES.UPDATE_TODO_FAILURE,
    createRequest(todo) {
      return {
        body: {
          todo,
        },
      }
    },
  },

  deleteTodo: {
    route: `${baseUrl}/api/todos`,
    method: 'DELETE',
    pending: ACTION_TYPES.DELETE_TODO_PENDING,
    success: ACTION_TYPES.DELETE_TODO_SUCCESS,
    failure: ACTION_TYPES.DELETE_TODO_FAILURE,
    createRequest(todo) {
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          todo,
        },
      }
    },
  },
})

export default TodosAPIActions

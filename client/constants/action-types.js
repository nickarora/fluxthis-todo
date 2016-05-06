import ConstantCollection from 'fluxthis/src/ConstantCollection'

// Register all actions here to allow for minification.
export default new ConstantCollection(
  'GET_TODOS_FAILURE',
  'GET_TODOS_PENDING',
  'GET_TODOS_SUCCESS',
  'ADD_TODO_FAILURE',
  'ADD_TODO_PENDING',
  'ADD_TODO_SUCCESS',
  'UPDATE_TODO_FAILURE',
  'UPDATE_TODO_PENDING',
  'UPDATE_TODO_SUCCESS',
  'DELETE_TODO_FAILURE',
  'DELETE_TODO_PENDING',
  'DELETE_TODO_SUCCESS'
)

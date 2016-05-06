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
})

export default TodosAPIActions

/* eslint-disable new-cap */
import ImmutableStore from 'fluxthis/src/ImmutableStore'
import ACTION_TYPES from '../constants/action-types'

const Immutable = ImmutableStore.Immutable

export default new ImmutableStore({
  displayName: 'TodosStore',

  init() {
    this.todos = Immutable.List([])

    this.status = Immutable.Map({
      pendingUpdate: false,
      isFetched: false,
    })

    this.bindActions(
      ACTION_TYPES.GET_TODOS_SUCCESS, this.setTodos,
      ACTION_TYPES.ADD_TODO_SUCCESS, this.prependTodo,
      ACTION_TYPES.UPDATE_TODO_SUCCESS, this.updateTodo,
      ACTION_TYPES.DELETE_TODO_SUCCESS, this.removeTodo,
      ACTION_TYPES.GET_TODOS_PENDING, this.setPending,
      ACTION_TYPES.ADD_TODO_PENDING, this.setPending,
      ACTION_TYPES.UPDATE_TODO_PENDING, this.setPending,
      ACTION_TYPES.DELETE_TODO_PENDING, this.setPending
    )
  },

  public: {
    groups() {
      return this.groups
    },

    status() {
      return this.status
    },
  },

  private: {
    setTodos(payload) {
      const responseBody = JSON.parse(payload.response.body)
      this.todos = Immutable.fromJS(responseBody)
      this.status = this.status.merge({
        pendingUpdate: false,
        isFetched: true,
      })
    },

    setPending() {
      this.status = this.status.set('pendingUpdate', true)
    },

    prependTodo(payload) {
      const responseBody = JSON.parse(payload.response.body)
      const todo = Immutable.fromJS(responseBody)
      this.groups = this.groups.unshift(todo)
      this.status = this.status.set('pendingUpdate', false)
    },

    removeTodo(payload) {
      const responseBody = JSON.parse(payload.response.body)
      const deletedTodo = Immutable.fromJS(responseBody)
      const updatedTodos = this.todos.filter(todo => todo.get('id') !== deletedTodo.id)
      this.status = this.status.set('pendingUpdate', false)
      this.todos = updatedTodos
    },

    updateTodo(payload) {
      const responseBody = JSON.parse(payload.response.body)
      const updatedTodo = Immutable.fromJS(responseBody)
      const index = this.todos.findIndex(todo => todo.get('id') === updatedTodo.id)
      this.todos = this.todos.set(index, updatedTodo)
      this.status = this.status.set('pendingUpdate', false)
    },
  },
})

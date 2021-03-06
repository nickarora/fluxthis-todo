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
      ACTION_TYPES.ADD_TODO_SUCCESS, this.addTodo,
      ACTION_TYPES.UPDATE_TODO_SUCCESS, this.updateTodo,
      ACTION_TYPES.DELETE_TODO_SUCCESS, this.removeTodo,
      ACTION_TYPES.GET_TODOS_PENDING, this.setPending,
      ACTION_TYPES.ADD_TODO_PENDING, this.setPending,
      ACTION_TYPES.UPDATE_TODO_PENDING, this.setPending,
      ACTION_TYPES.DELETE_TODO_PENDING, this.setPending
    )
  },

  public: {
    todos() {
      return this.todos
    },

    status() {
      return this.status
    },
  },

  private: {
    setTodos(payload) {
      const responseBody = payload.response.body
      this.todos = Immutable.fromJS(responseBody)
      this.status = this.status.merge({
        pendingUpdate: false,
        isFetched: true,
      })
    },

    setPending() {
      this.status = this.status.set('pendingUpdate', true)
    },

    addTodo(payload) {
      const responseBody = payload.response.body
      const todo = Immutable.fromJS(responseBody)
      this.todos = this.todos.push(todo)
      this.status = this.status.set('pendingUpdate', false)
    },

    removeTodo(payload) {
      const deletedTodo = payload.request.body.todo.toJS()
      const updatedTodos = this.todos.filter(todo => todo.get('id') !== deletedTodo.id)

      this.status = this.status.set('pendingUpdate', false)
      this.todos = updatedTodos
    },

    updateTodo(payload) {
      const updatedTodo = payload.request.body.todo
      const newTodos = this.todos.map((todo) => {
        if (todo.get('id') === updatedTodo.get('id')) {
          return updatedTodo
        }

        return todo
      })

      this.todos = newTodos
      this.status = this.status.set('pendingUpdate', false)
    },
  },
})

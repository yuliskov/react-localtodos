import {ADD_TODO, REMOVE_TODO, REMOVE_CHECKED_TODOS, UPDATE_TODO, TOGGLE_TODO, TOGGLE_ALL_TODOS} from '../constants/ActionTypes'

let nextTodoId = 1

export const addTodo = (title) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  title
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id
})

export const removeCheckedTodos = () => ({
    type: REMOVE_CHECKED_TODOS
})

export const updateTodo = (id, title, checked) => ({
  type: UPDATE_TODO,
  id, title, checked
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})

export const toggleAllTodos = (checked) => ({
  type: TOGGLE_ALL_TODOS,
  checked
})

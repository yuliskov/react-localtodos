let nextTodoId = 1

export const addTodo = (title) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  title
})

export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
})

export const removeCheckedTodos = () => ({
    type: 'REMOVE_CHECKED_TODOS'
})

export const updateTodo = (id, title, checked) => ({
  type: 'UPDATE_TODO',
  id, title, checked
})

export const toggleAllTodos = (checked) => ({
  type: 'TOGGLE_ALL_TODOS',
  checked
})

// action types
export const ADD_TODO = 'localtodos/todos/ADD_TODO'
export const REMOVE_TODO = 'localtodos/todos/REMOVE_TODO'
export const REMOVE_CHECKED_TODOS = 'localtodos/todos/REMOVE_CHECKED_TODOS'
export const UPDATE_TODO = 'localtodos/todos/UPDATE_TODO'
export const TOGGLE_TODO = 'localtodos/todos/TOGGLE_TODO'
export const TOGGLE_ALL_TODOS = 'localtodos/todos/TOGGLE_ALL_TODOS'

// actions

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

// reducer

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            // calculate id (maybe state is restored??)
            let nextId = state.reduce((acc, cur) => {
                if (acc < cur.id)
                    return cur.id
                return acc
            }, 0)
            return [
                ...state,
                {
                    id: ++nextId,
                    title: action.title,
                    checked: false
                }
            ]
        case REMOVE_TODO:
            return state.filter(t => t.id !== action.id)
        case REMOVE_CHECKED_TODOS:
            return state.filter(t => !t.checked)
        case UPDATE_TODO:
            return state.map(t =>
                t.id == action.id ? {...t, checked: action.checked, title: action.title} : t
            )
        case TOGGLE_TODO:
            return state.map(t =>
                t.id == action.id ? {...t, checked: !t.checked} : t
            )
        case TOGGLE_ALL_TODOS:
            return state.map(t => ({...t, checked: action.checked}))
        default:
            return state
    }
}

export default todos

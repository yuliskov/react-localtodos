import undoable from 'redux-undo'
import {REHYDRATE} from 'redux-persist/constants'
import {processSpecial} from 'redux-persist'

const todos = (state = [], action) => {
    switch (action.type) {
        case REHYDRATE:
            if (!action.payload.todos)
                return state
            var incoming = action.payload.todos.present
            return [...state, ...incoming]
        case 'ADD_TODO':
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
        case 'REMOVE_TODO':
            return state.filter(t => t.id !== action.id)
        case 'REMOVE_CHECKED_TODOS':
            return state.filter(t => !t.checked)
        case 'UPDATE_TODO':
            return state.map(t =>
                t.id == action.id ? {...t, checked: action.checked, title: action.title} : t
            )
        case 'TOGGLE_ALL_TODOS':
            return state.map(t => ({...t, checked: action.checked}))
        default:
            return state
    }
}

const undoableTodos = undoable(todos)

export default undoableTodos

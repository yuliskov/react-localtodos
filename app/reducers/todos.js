import undoable from 'redux-undo'
import {excludeAction} from 'redux-undo'
import {ADD_TODO, REMOVE_TODO, REMOVE_CHECKED_TODOS, UPDATE_TODO, TOGGLE_TODO, TOGGLE_ALL_TODOS} from '../constants/ActionTypes'
import {undoableTodosDecorator} from '../addons/localStorage'

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

const undoableTodos = undoableTodosDecorator(undoable(todos, {
    limit: 10, filter: excludeAction([TOGGLE_TODO, TOGGLE_ALL_TODOS, ADD_TODO])
}))

export {todos}

export default undoableTodos

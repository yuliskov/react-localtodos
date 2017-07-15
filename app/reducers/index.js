import undoable from 'redux-undo'
import {excludeAction} from 'redux-undo'
import { combineReducers } from 'redux'
import todos from './todos'
import locales from './locales'
import {TOGGLE_TODO, TOGGLE_ALL_TODOS, ADD_TODO} from './todos'
import {SET_LANGUAGE} from './locales'

const undoableTodos = undoable(todos, {
    limit: 10, filter: excludeAction([TOGGLE_TODO, TOGGLE_ALL_TODOS, ADD_TODO, SET_LANGUAGE])
})

const todoApp = combineReducers({
    todos: undoableTodos, locales
})

export default todoApp

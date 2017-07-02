import { combineReducers } from 'redux'
import todos from './todos'
import locales from './locales'

const todoApp = combineReducers({
    todos, locales
})

export default todoApp

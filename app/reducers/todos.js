import undoable from 'redux-undo'
import {excludeAction} from 'redux-undo'
import {REHYDRATE} from 'redux-persist/constants'
import {getStoredState} from 'redux-persist'

const todos = (state = [], action) => {
    switch (action.type) {
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
        case 'TOGGLE_TODO':
            return state.map(t =>
                t.id == action.id ? {...t, checked: !t.checked} : t
            )
        case 'TOGGLE_ALL_TODOS':
            return state.map(t => ({...t, checked: action.checked}))
        default:
            return state
    }
}

// Source: http://redux.js.org/docs/recipes/ImplementingUndoHistory.html
function undoableTodosDecorator(reducer) {
    // Call the reducer with empty action to populate the initial state
    const initialState = {
        past: [],
        present: [],
        future: []
    }

    // Return a reducer
    return function (state = initialState, action) {
        const { past, present, future } = state

        switch (action.type) {
          case REHYDRATE:
            if (!action.payload.todos)
              return state
            var incoming = action.payload.todos
            return incoming
          default:
            return reducer(state, action)
        }
    }
}

const undoableTodos = undoableTodosDecorator(undoable(todos, {
    limit: 10, filter: excludeAction(['TOGGLE_TODO'])
  }))

export default undoableTodos

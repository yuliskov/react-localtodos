import {compose, applyMiddleware, createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import {REHYDRATE} from 'redux-persist/constants'
import reducer from '../reducers'
import { combineReducers } from 'redux'

// Source: http://redux.js.org/docs/recipes/ImplementingUndoHistory.html
const undoableTodosDecorator = (reducer) => {
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

const getLocalStore = () => {
    // add `autoRehydrate` as an enhancer to your store (note: `autoRehydrate` is not a middleware)
    const store = createStore(
        reducer
    )

    // begin periodically persisting the store
    persistStore(store)

    return store
}

export {getLocalStore, undoableTodosDecorator}

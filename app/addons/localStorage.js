import {compose, applyMiddleware, createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import {REHYDRATE} from 'redux-persist/constants'
import reducer from '../reducers'
import { combineReducers } from 'redux'

// Source: http://redux.js.org/docs/recipes/ImplementingUndoHistory.html
const universalDecorator = (reducer, name, initialState) => {
    // Return a reducer
    return function (state, action) {
        switch (action.type) {
          case REHYDRATE:
            if (!action.payload[name])
              return state || initialState
            const incoming = action.payload[name]
            return incoming
          default:
            return reducer(state || initialState, action)
        }
    }
}

const getLocalStore = () => {
    // add `autoRehydrate` as an enhancer to your store (note: `autoRehydrate` is not a middleware)
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    // begin periodically persisting the store
    persistStore(store)

    return store
}

export {getLocalStore, universalDecorator}

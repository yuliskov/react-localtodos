import {compose, applyMiddleware, createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import reducer from '../reducers'
import {REHYDRATE} from 'redux-persist/constants'

// add `autoRehydrate` as an enhancer to your store (note: `autoRehydrate` is not a middleware)
const store = createStore(
    reducer
)

// begin periodically persisting the store
persistStore(store)

export {store}

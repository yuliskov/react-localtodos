import {compose, applyMiddleware, createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import reducers from '../reducers'

// add `autoRehydrate` as an enhancer to your store (note: `autoRehydrate` is not a middleware)
const store = createStore(
  reducers,
  undefined,
  compose(
    autoRehydrate()
  )
)

// begin periodically persisting the store
persistStore(store)

export default store


// import * as storage from 'redux-storage'
// import createEngine from 'redux-storage-engine-localstorage'
// import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
// import reducers from '../reducers'
//
// // http://redux.js.org/docs/api/applyMiddleware.html
//
// const reducer = storage.reducer(combineReducers(reducers))
// const engine = createEngine('my-save-key')
// const middleware = storage.createMiddleware(engine)
// const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)
// export const store = createStoreWithMiddleware(reducer)
// const load = storage.createLoader(engine)
// load(store)

import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'containers/TodoApp';
import { compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

// import * as storage from 'redux-storage'
// reducer = storage.reducer(combineReducers(reducers))
// import createEngine from 'redux-storage-engine-localstorage'
// const engine = createEngine('my-save-key')
// const middleware = storage.createMiddleware(engine)
// const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)
// const store = createStoreWithMiddleware(reducer)
// const load = storage.createLoader(engine)
// load(store)

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
)

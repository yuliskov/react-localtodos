import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'containers/TodoApp';
import { compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
// import {store} from './addons/localStorage'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import {compose, createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import {getLocalStore} from './addons/localStorage'
import IntlProvider from './containers/IntlProvider'
import {getLocale, loadLocaleData} from './addons/i18n'
import TodoApp from './containers/TodoApp'

// const store = createStore(reducers)

ReactDOM.render(
    <Provider store={getLocalStore()}>
        <IntlProvider>
            <TodoApp />
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
)

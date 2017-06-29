import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from 'containers/TodoApp'
import { compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import {store} from './addons/localStorage'
import {IntlProvider} from 'react-intl'
import {getLocale, loadLocaleData} from './addons/i18n'

// const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale={getLocale()} messages={loadLocaleData()}>
            <TodoApp />
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
)

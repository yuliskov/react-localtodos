import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from 'containers/TodoApp'
import { compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import {store} from './addons/localStorage'
import Cookie from 'js-cookie'
import {IntlProvider} from 'react-intl'

// const store = createStore(reducers)

const locale = Cookie.get('locale') || 'en';

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale={locale}>
            <TodoApp />
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
)

import React from 'react'
import {injectIntl, defineMessages} from 'react-intl'
const styles = require('./Header.scss')

const messages = defineMessages({
    placeholder: {
        id: 'header.placeholder',
        defaultMessage: 'What needs to be done?',
    },
})

class Header extends React.Component {
    addTodo(e) {
        if (e.key != 'Enter') return;
        if (!e.target.value) return;

        const title = e.target.value
        this.props.addTodo(title);
        e.target.value = ''
    }
    render() {
        return <header>
            <h1>Todos</h1>
            <input className={styles.newTodo} id="new-todo" type="text" placeholder={this.props.intl.formatMessage(messages.placeholder)} onKeyPress={this.addTodo.bind(this)}/>
        </header>
    }
}

export default injectIntl(Header)

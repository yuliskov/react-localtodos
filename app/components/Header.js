import React from 'react'
import {injectIntl, defineMessages} from 'react-intl'

const messages = defineMessages({
    placeholder: {
        id: 'header.placeholder',
        defaultMessage: 'What needs to be done?',
    },
})

class Header extends React.Component {
  createOnEnter(e) {
    if (e.key != 'Enter') return;
    if (!e.target.value) return;

    this.props.onCreateTodo({title: e.target.value});
    e.target.value = ''
  }
  render() {
    return <header>
      <h1>Todos</h1>
      <input id="new-todo" type="text" placeholder={this.props.intl.formatMessage(messages.placeholder)} onKeyPress={this.createOnEnter.bind(this)}/>
    </header>
  }
}

export default injectIntl(Header)

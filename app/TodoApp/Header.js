import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    createOnEnter(e) {
        if (e.key != 'Enter') return;
        if (!e.target.value) return;

        this.props.onCreateTodo({title: e.target.value});
        e.target.value = ''
    }
    render() {
        return <header>
          <h1>Todos</h1>
          <input id="new-todo" type="text" placeholder="What needs to be done?" onKeyPress={this.createOnEnter.bind(this)}/>
        </header>
    }
}

export default Header

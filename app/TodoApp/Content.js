import React from 'react'

class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    toggleAllComplete(e) {
        var done = e.target.checked
        this.props.toggleAllComplete({'done': done})
    }
    render() {
        return <section id="main">
          <input id="toggle-all" type="checkbox" onClick={this.toggleAllComplete.bind(this)}/>
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul id="todo-list">
            {this.props.items}
          </ul>
        </section>
    }
}

export default Content

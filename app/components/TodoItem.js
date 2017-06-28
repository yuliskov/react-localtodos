import React from 'react'

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        }
    }
    toggleDone(e) {
        this.props.toggleTodo(this.props.todoItem)
    }
    edit() {
        this.setState({editing: true})
    }
    clear() {
        this.props.handleRemove(this.props.todoItem)
    }
    updateOnEnter(e) {
        if (e.keyCode == 13) this.close(e);
    }
    close(e) {
        const title = this.props.todoItem.title
        const checked = this.props.todoItem.checked
        const id = this.props.todoItem.id
        let value = e.target.value
        if (!value) {
            this.clear()
        } else if (title != value) {
            this.props.handleChange({title: e.target.value, id: id, checked: checked})
        }
        this.setState({editing: false})
    }
    componentDidUpdate() {
        this.editInput.value = this.props.todoItem.title // fix update uncontrolled components
        if (this.state.editing)
            this.editInput.focus()
    }
    render() {
        const checked = this.props.todoItem.checked
        const title = this.props.todoItem.title
        const editingClass = this.state.editing ? 'editing' : ''
        const checkedClass = checked ? 'done' : ''
        const itemClassName = `${editingClass} ${checkedClass}`
        return <li className={itemClassName}>
            <div className="view" onDoubleClick={this.edit.bind(this)}>
              <input className="toggle" type="checkbox" checked={checked} onChange={this.toggleDone.bind(this)} />
              <label>{title}</label>
              <a className="destroy" onClick={this.clear.bind(this)}></a>
            </div>
            <input className="edit" type="text" defaultValue={title} ref={(input) => {this.editInput = input}}
                onKeyPress={this.updateOnEnter.bind(this)}
                onBlur={this.close.bind(this)}/>
            </li>
    }
}

export default TodoItem

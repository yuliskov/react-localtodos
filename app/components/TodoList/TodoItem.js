import React from 'react'
const styles = require('./TodoItem.scss')

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        }
    }
    toggleTodo(e) {
        this.props.toggleTodo(this.props.todoItem.id)
    }
    edit() {
        this.setState({editing: true})
    }
    removeTodo() {
        this.props.removeTodo(this.props.todoItem.id)
    }
    updateTodo(e) {
        if (e.key && e.key != 'Enter')
            return;

        const title = this.props.todoItem.title
        const checked = this.props.todoItem.checked
        const id = this.props.todoItem.id
        let newTitle = e.target.value
        if (!newTitle) {
            this.removeTodo()
        } else if (title != newTitle) {
            this.props.updateTodo(id, newTitle, checked)
        }
        this.setState({editing: false})
    }
    componentDidUpdate() {
        // NOTE: update uncontrolled components
        this.editInput.value = this.props.todoItem.title
        if (this.state.editing)
            this.editInput.focus()
    }
    render() {
        const checked = this.props.todoItem.checked
        const title = this.props.todoItem.title
        const editingClass = this.state.editing ? styles.editing : ''
        const checkedClass = checked ? styles.done : ''
        const itemClassName = `${editingClass} ${checkedClass}`
        return <li className={itemClassName}>
            <div className={styles.view} onDoubleClick={this.edit.bind(this)}>
              <input className={styles.toggle} type="checkbox" checked={checked} onChange={this.toggleTodo.bind(this)} />
              <label>{title}</label>
              <a className={styles.destroy} onClick={this.removeTodo.bind(this)}></a>
            </div>
            <input className={styles.edit} type="text" defaultValue={title} ref={(input) => {this.editInput = input}}
                onKeyPress={this.updateTodo.bind(this)}
                onBlur={this.updateTodo.bind(this)}/>
            </li>
    }
}

export default TodoItem

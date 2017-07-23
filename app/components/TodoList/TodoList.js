import React from 'react'
import TodoItem from './TodoItem'
const styles = require('./TodoList.scss')

class TodoList extends React.Component {
    toggleAllTodos(e) {
        var done = e.target.checked
        this.props.toggleAllTodos(done)
    }
    render() {
        if (this.props.items == 0)
            return null
        const items = this.props.items.map((obj, n) => <TodoItem key={obj.id} todoItem={obj}
            toggleTodo={this.props.toggleTodo.bind(this)}
            updateTodo={this.props.updateTodo.bind(this)}
            removeTodo={this.props.removeTodo.bind(this)} />)
        return <section id="main" className={styles.main}>
            <input id="toggle-all" type="checkbox" onClick={this.toggleAllTodos.bind(this)}/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul id="todo-list" className={styles.todoList}>
                {items}
            </ul>
        </section>
    }
}

export default TodoList

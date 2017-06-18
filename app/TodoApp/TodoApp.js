import React from 'react'
import TodoItem from './TodoItem'
import Footer from './Footer'
import Header from './Header'
import Content from './Content'
require('./TodoApp.styl')

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.initState()
    }
    initState() {
        const arr = [1,2,3,4]
        const items = arr.map((i, n) => {return {id: n, title: "No title", checked: true}})
        return {items: items}
    }
    toggleAllComplete({done}) {
        let items = this.state.items
        items = items.map((obj, n) => {return {id: obj.id, title: obj.title, checked: done}})
        this.setState({items: items})
    }
    handleItemChange(item) {
        let items = this.state.items
        items = items.map((obj, n) => {
            if (obj.id == item.id)
                return {id: item.id, title: item.title, checked: item.checked}
            else
                return obj
        })
        this.setState({items: items})
    }
    handleItemRemove(item) {
        let res = confirm("Do you want to remove this item?")
        if (!res)
            return
        let items = this.state.items
        items = items.filter((obj) => !(obj.id == item.id))
        this.setState({items: items})
    }
    createTodoItem(item) {
        console.log('creating item')
        let newId = this.state.items.reduce((acc, cur) => {
            if (cur.id > acc)
                return cur.id
            else
                return acc
        }, 0)
        this.setState(prevState => {return {items: [...prevState.items, {title: item.title, id: newId + 1, checked: false}]}})
    }
    clearAllChecked() {
        if (!confirm("Clear done items?"))
            return
        let items = this.state.items
        items = items.filter((obj) => !obj.checked)
        this.setState({items: items})
    }
    render() {
        let items = this.state.items
        let doneNum = items.reduce((acc, cur) => {
            if (cur.checked)
                acc += 1
            return acc
        }, 0)
        items = items.map((obj, n) => <TodoItem key={obj.id} id={obj.id} title={obj.title} checked={obj.checked}
            handleChange={this.handleItemChange.bind(this)}
            handleRemove={this.handleItemRemove.bind(this)}/>)
        return <div id="todoapp">
        <Header onCreateTodo={this.createTodoItem.bind(this)} />
        {items.length ? <Content items={items} toggleAllComplete={this.toggleAllComplete.bind(this)}/> : null}
        {items.length ? <Footer done={doneNum} remaining={items.length - doneNum} clearAllChecked={this.clearAllChecked.bind(this)}/> : null}
        </div>
    }
}

export default TodoApp

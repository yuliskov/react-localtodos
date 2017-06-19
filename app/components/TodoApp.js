import React from 'react'
import TodoItem from '../containers/TodoItem'
import Footer from '../containers/Footer'
import Header from '../containers/Header'
import Content from '../containers/Content'
require('./TodoApp.styl')

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.initState()
    }
    initState() {
        const arr = [1,2,3,4]
        const items = arr.map((i, n) => {return {id: n, title: "No title", checked: true}})
        return {items: items}
    }
    render() {
        let items = this.props.items
        let doneNum = items.reduce((acc, cur) => {
            if (cur.checked)
                acc += 1
            return acc
        }, 0)
        items = items.map((obj, n) => <TodoItem key={obj.id} id={obj.id} title={obj.title} checked={obj.checked}/>)
        return <div id="todoapp">
        <Header/>
        {items.length ? <Content items={items}/> : null}
        {items.length ? <Footer done={doneNum} remaining={items.length - doneNum}/> : null}
        </div>
    }
}

export default TodoApp

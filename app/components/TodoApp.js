import React from 'react'
import ForkMeRibbon from '../components/ForkMeRibbon'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'
import LangMenu from '../components/LangMenu'
require('../assets/TodoApp.styl')

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        // global event listener
        document.body.addEventListener('keydown', this.onKeyPress.bind(this))
    }
    initState() {
        const arr = [1,2,3,4]
        const items = arr.map((i, n) => {return {id: n, title: "No title", checked: true}})
        return {items: items}
    }
    onKeyPress(e) {
        // Ctrl-z
        if (e.keyCode == 90 && e.ctrlKey) this.props.doUndo()
    }
    render() {
        let items = this.props.items
        let doneNum = items.reduce((acc, cur) => {
            if (cur.checked)
                acc += 1
            return acc
        }, 0)

        return <div id="todoapp">
        <ForkMeRibbon/>
        <LangMenu langs={this.props.availableLocales} selectedLang={this.props.currentLanguage} setLanguage={this.props.setLanguage.bind(this)}/>
        <Header addTodo={this.props.addTodo.bind(this)}/>
        <Content items={items} toggleAllTodos={this.props.toggleAllTodos.bind(this)}
            toggleTodo={this.props.toggleTodo.bind(this)} updateTodo={this.props.updateTodo.bind(this)} removeTodo={this.props.removeTodo.bind(this)}/>
        <Footer done={doneNum} count={items.length} remaining={items.length - doneNum} undoCount={this.props.undoCount}
            doUndo={this.props.doUndo.bind(this)} removeCheckedTodos={this.props.removeCheckedTodos.bind(this)}/>
        </div>
    }
}

export default TodoApp

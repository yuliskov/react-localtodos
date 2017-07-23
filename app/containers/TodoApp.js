import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import {doUndo, addTodo, removeTodo, removeCheckedTodos, updateTodo, toggleTodo, toggleAllTodos} from '../reducers/todos'
import {setLanguage} from '../reducers/locales'
import {TodoApp} from '../components'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.todos.present,
        undoCount: state.todos.past.length,
        availableLocales: state.locales.availableLocales,
        currentLanguage: state.locales.lang
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({doUndo, addTodo, removeTodo, removeCheckedTodos, updateTodo, toggleTodo, toggleAllTodos, setLanguage}, dispatch)
}

const ConnectedTodoApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp)

export default ConnectedTodoApp

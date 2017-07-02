import { connect } from 'react-redux'
import TodoApp from '../components/TodoApp'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import {toggleAllTodos, removeCheckedTodos, addTodo, updateTodo, removeTodo, toggleTodo} from '../actions'
import {setLanguage} from '../actions/lang'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.todos.present,
        undoCount: state.todos.past.length,
        availableLocales: state.locales.availableLocales,
        currentLanguage: state.locales.lang
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    doUndo: () => {
        dispatch(UndoActionCreators.undo())
    },
    toggleAllComplete: ({done}) => {
        dispatch(toggleAllTodos(done))
    },
    clearAllChecked: () => {
        dispatch(removeCheckedTodos())
    },
    onCreateTodo: ({title}) => {
        dispatch(addTodo(title))
    },
    toggleTodo: ({id, checked}) => {
        dispatch(toggleTodo(id))
    },
    handleChange: ({id, title, checked}) => {
        dispatch(updateTodo(id, title, checked))
    },
    handleRemove: ({id}) => {
        dispatch(removeTodo(id))
    },
    handleLangSwitch: (lang) => {
        dispatch(setLanguage(lang))
    }
})

const ConnectedTodoApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp)

export default ConnectedTodoApp

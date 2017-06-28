import { connect } from 'react-redux'
import TodoApp from '../components/TodoApp'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import {toggleAllTodos, removeCheckedTodos, addTodo, updateTodo, removeTodo, toggleTodo} from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.todos.present,
        undoCount: state.todos.past.length
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
    }
})

const ConnectedTodoApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp)

export default ConnectedTodoApp

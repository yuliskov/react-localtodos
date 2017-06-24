import { connect } from 'react-redux'
import TodoApp from '../components/TodoApp'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.todos.present,
        undoCount: state.todos.past.length
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    doUndo: () => {
        dispatch(UndoActionCreators.undo())
    }
})

const ConnectedTodoApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp)

export default ConnectedTodoApp

import { connect } from 'react-redux'
import Footer from '../components/Footer'
import {removeCheckedTodos} from '../actions'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

const mapStateToProps = (state, ownProps) => ({
    undoCount: state.todos.past.length
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    clearAllChecked: () => {
        dispatch(removeCheckedTodos())
    },
    doUndo: () => {
        dispatch(UndoActionCreators.undo())
    }
})

const ConnectedFooter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)

export default ConnectedFooter

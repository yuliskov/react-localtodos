import { connect } from 'react-redux'
import TodoItem from '../components/TodoItem'
import {updateTodo, removeTodo} from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: ({id, title, checked}) => {
    dispatch(updateTodo(id, title, checked))
  },
  handleRemove: ({id}) => {
    dispatch(removeTodo(id))
  }
})

const ConnectedTodoItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem)

export default ConnectedTodoItem

import { connect } from 'react-redux'
import TodoApp from '../components/TodoApp'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.todos
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const ConnectedTodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)

export default ConnectedTodoApp

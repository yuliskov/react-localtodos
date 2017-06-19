import { connect } from 'react-redux'
import Header from '../components/Header'
import {addTodo} from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreateTodo: ({title}) => {
    dispatch(addTodo(title))
  }
})

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default ConnectedHeader

import { connect } from 'react-redux'
import Footer from '../components/Footer'
import {removeCheckedTodos} from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    clearAllChecked: () => {
        dispatch(removeCheckedTodos())
    }
})

const ConnectedFooter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default ConnectedFooter

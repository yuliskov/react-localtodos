import { connect } from 'react-redux'
import Content from '../components/Content'
import {toggleAllTodos} from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleAllComplete: ({done}) => {
        dispatch(toggleAllTodos(done))
    }
})

const ConnectedContent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Content)

export default ConnectedContent

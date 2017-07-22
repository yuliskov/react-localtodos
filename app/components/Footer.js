import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    removeCheckedTodos() {
        this.props.removeCheckedTodos()
        return false;
    }
    doUndo() {
        this.props.doUndo()
        return false
    }
    render() {
        if (this.props.undoCount == 0 && this.props.count == 0)
            return null
        return <footer>
            {this.props.undoCount > 0 &&
                <a id="clear-completed" onClick={this.doUndo.bind(this)}>Undo {this.props.undoCount} {this.props.undoCount == 1 ? 'step' : 'steps'}</a>
            }
            {this.props.done > 0 &&
                <a id="clear-completed" onClick={this.removeCheckedTodos.bind(this)}>Remove {this.props.done} completed {this.props.done == 1 ? 'item' : 'items'}</a>
            }
            {this.props.count > 0 &&
                <div className="todo-count"><b>{this.props.remaining}</b> {this.props.remaining == 1 ? 'item' : 'items'} left</div>
            }
        </footer>
    }
}

export default Footer

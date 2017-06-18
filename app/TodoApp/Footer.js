import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    clearCompleted() {
        this.props.clearAllChecked()
        return false;
    }
    render() {
        return <footer>
            {this.props.done > 0 &&
                <a id="clear-completed" onClick={this.clearCompleted.bind(this)}>Clear {this.props.done} completed {this.props.done == 1 ? 'item' : 'items'}</a>
            }
            <div className="todo-count"><b>{this.props.remaining}</b> {this.props.remaining == 1 ? 'item' : 'items'} left</div>
        </footer>
    }
}

export default Footer

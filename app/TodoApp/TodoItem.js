import React from 'react'

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.checked,
            title: this.props.title,
            id: this.props.id,
            editing: false
        }
    }
    toggleDone(e) {
        this.setState(prevState => ({checked: !prevState.checked}))
        this.props.handleChange({title: this.props.title, id: this.props.id, checked: e.target.checked})
    }
    edit() {
        this.setState({editing: true})
    }
    clear() {
        alert('removing todo item...')
        this.props.handleRemove({title: this.props.title, id: this.props.id, checked: this.props.checked})
    }
    updateOnEnter(e) {
        if (e.keyCode == 13) this.close();
    }
    close() {
        let value = this.state.title
        if (!value) {
            this.clear()
        } else {
            this.setState({editing: false})
        }
    }
    handleChange(e) {
        this.setState({title: e.target.value})
        this.props.handleChange({title: e.target.value, id: this.props.id, checked: this.props.checked})
    }
    componentDidMount() {
        if (this.state.editing)
            this.editInput.focus()
    }
    render() {
        let editing = this.state.editing ? 'editing' : ''
        let checked = this.state.checked ? 'done' : ''
        let itemClassName = `${editing} ${checked}`
        return <li className={itemClassName}>
            <div className="view" onDoubleClick={this.edit.bind(this)}>
              <input className="toggle" type="checkbox" checked={this.state.checked} onClick={this.toggleDone.bind(this)} />
              <label>{this.state.title}</label>
              <a className="destroy" onClick={this.clear.bind(this)}></a>
            </div>
            <input className="edit" type="text" value={this.state.title} ref={(input) => {this.editInput = input}}
                onKeyPress={this.updateOnEnter.bind(this)}
                onBlur={this.close.bind(this)}
                onChange={this.handleChange.bind(this)}/>
            </li>
    }
}

export default TodoItem
import React from 'react'

class LangMenu extends React.Component {
    handleLangSwitch(e) {
        this.props.handleLangSwitch(e.target.value)
    }
    render() {
        if (!this.props.langs)
            return null
        const options = this.props.langs.map((obj, n) =>
            <option key={n} value={obj}>{obj}</option>)
        return <select value={this.props.selectedLang} onChange={this.handleLangSwitch.bind(this)}>
            {options}
            </select>
    }
}

export default LangMenu

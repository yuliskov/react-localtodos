import React from 'react'

class LangMenu extends React.Component {
    setLanguage(e) {
        this.props.setLanguage(e.target.value)
    }
    render() {
        if (!this.props.langs)
            return null
        const options = this.props.langs.map((obj, n) =>
            <option key={n} value={obj}>{obj}</option>)
        return <select value={this.props.selectedLang} onChange={this.setLanguage.bind(this)}>
            {options}
            </select>
    }
}

export default LangMenu

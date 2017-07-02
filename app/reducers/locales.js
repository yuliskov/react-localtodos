import {SET_LANGUAGE} from '../constants/ActionTypes'
import {getLocale, loadLocaleData, getAvailableLocales} from '../addons/i18n'

const locales = (state = {lang: getLocale(), messages: loadLocaleData(), availableLocales: getAvailableLocales()}, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {lang: action.lang, messages: action.messages, availableLocales: action.availableLocales}
        default:
            return state
    }
}

export default locales

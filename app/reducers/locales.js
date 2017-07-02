import {SET_LANGUAGE} from '../constants/ActionTypes'
import {getLocale, loadLocaleData, getAvailableLocales} from '../addons/i18n'
import {universalDecorator} from '../addons/localStorage'

const locales = (state = {lang: getLocale(), messages: loadLocaleData()}, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {lang: action.lang, messages: action.messages, availableLocales: action.availableLocales}
        default:
            return state
    }
}

const localeDecorator = universalDecorator(locales, 'locales', {lang: getLocale(), messages: loadLocaleData(), availableLocales: getAvailableLocales()})

export default localeDecorator

import {getLocale, loadLocaleData, getAvailableLocales} from '../addons/i18n'

export const SET_LANGUAGE = 'localtodos/locales/SET_LANGUAGE'

export const setLanguage = (lang) => {
    return {
      type: SET_LANGUAGE,
      lang: lang,
      messages: loadLocaleData(lang),
      availableLocales: getAvailableLocales()
    }
}

const initState = {
    lang: getLocale(),
    messages: loadLocaleData(),
    availableLocales: getAvailableLocales()
}

const locales = (state = initState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {lang: action.lang, messages: action.messages, availableLocales: action.availableLocales}
        default:
            return state
    }
}

export default locales

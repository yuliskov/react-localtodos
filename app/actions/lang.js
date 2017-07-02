import {SET_LANGUAGE} from '../constants/ActionTypes'
import {loadLocaleData, getAvailableLocales} from '../addons/i18n'

export const setLanguage = (lang) => {
    return {
      type: SET_LANGUAGE,
      lang: lang,
      messages: loadLocaleData(lang),
      availableLocales: getAvailableLocales()
    }
}

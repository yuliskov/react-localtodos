import path from 'path'
import Cookie from 'js-cookie'
// https://webpack.github.io/docs/context.html#dynamic-requires
const req = require.context("../assets/lang", true, /^\.\/.*\.json$/)
import {addLocaleData} from 'react-intl'

const langs = ['en', 'ru']
const reqIntl = require.context('react-intl/locale-data', true, /^\.\/(en|ru)\.js$/)

// Fix error: [React Intl] Missing locale data for locale: "ru". Using default locale: "en" as fallback.
const intlLocales = requireAll(reqIntl)
addLocaleData(intlLocales.reduce((prev, curr) => [...prev, ...curr], []))

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

export const loadLocaleData = () => {
    let langData = {}
    try {
        langData = req('./' + getLocale() + '.json')
    } catch (e) {
        console.log(e)
    }
    return langData
}

export const getLocale = () => {
    return Cookie.get('locale') || 'en'
}

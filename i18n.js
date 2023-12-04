import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import  LanguageDetector  from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";
import enTranslations from "../Team2/public/localization/en/translation.json"
import arTranslations from "../Team2/public/localization/ar/translation.json"

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug:true,
        resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
    },
detection:{
  order:['queryString','cookie'],
  cash:['cookie']
},
interpolation:{
  escapeValue:false
}
})
export default i18n
import { 
    initialize, 
    addTranslationForLanguage, 
    getTranslate,
} from 'react-localize-redux';
import { first } from 'lodash';
import { renderToStaticMarkup } from "react-dom/server";

import english from '../translations/english.json';
import ukrainian from '../translations/ukrainian.json';

export const defaultLanguage = 'en';

const data = {
    [defaultLanguage]: {
        name: 'English',
        translations: english,
    },
    ua: {
        name: 'Українська',
        translations: ukrainian,
    },
};

const options = {
    defaultLanguage,
    renderToStaticMarkup,
};

function initLocalization(store) {
    const languages = Object.keys(data).map(key => ({
        code: key,
        name: data[key].name,
    }));
    store.dispatch(initialize({languages, options}))
    languages.forEach((language) => {
        console.log(data[language.code].translations);
        store.dispatch(addTranslationForLanguage(data[language.code].translations, language.code));
    })
};

export function getTranslations(localize) {
    const translate = getTranslate(localize);
    return (name) => translate(name, undefined, {
        missingTranslationMsg: localize.translations[name] ? first(localize.translations[name]) : name, 
        showMissingTranslationMsg: true,
    })
}

export default initLocalization;

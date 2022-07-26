import { addMessages, getLocaleFromNavigator } from 'svelte-i18n';
import { init } from 'svelte/internal';
import en from './en.json';
import pt from './pt.json';
console.log(pt);
addMessages('en', en);
addMessages('pt', pt);

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator()
})
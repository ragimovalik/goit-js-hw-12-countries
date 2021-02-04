import debounce from 'lodash.debounce';
import templateMarkup from '../templates/template.hbs';
import countryCard from '../templates/countrycard.hbs';
import fetchCountries from './fetchCountries.js';
import { myNotice, myError } from './notifications.js';

const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

const inputEl = document.getElementById('input');
const searchResultEl = document.querySelector('.results__box');

inputEl.addEventListener('input', debounce(inputedTextHandler, 500));
inputEl.addEventListener('blur', () => (inputEl.value = ''));

function inputedTextHandler() {
  let inputedText = (inputedText = inputEl.value);
  const url = BASE_URL + inputedText;

  fetchCountries(url).then(fetchHandler);
  // .finally(() => {});
}

function fetchHandler(countries) {
  if (!countries) {
    searchResultEl.innerHTML = '';
    myError();
    return;
  }

  if (countries.length >= 2 && countries.length < 10) {
    const markup = templateMarkup(countries);
    searchResultEl.innerHTML = markup;
  }

  if (countries.length > 10) {
    searchResultEl.innerHTML = '';
    myNotice();
  }

  if (countries.length === 1) {
    const markup2 = countryCard(...countries);
    searchResultEl.innerHTML = markup2;
  }
}

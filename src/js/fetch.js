import debounce from 'lodash.debounce';
import countriesListTemplate from '../templates/template.hbs';
import countryCardTemplate from '../templates/countrycard.hbs';
import fetchCountries from './fetchCountries.js';
import { myNotice, myError } from './notifications.js';

const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

const inputEl = document.getElementById('input');
const searchResultEl = document.querySelector('.results__box');

inputEl.addEventListener('input', debounce(inputedTextHandler, 500));
inputEl.addEventListener('blur', () => (inputEl.value = ''));

function inputedTextHandler() {
  const url = BASE_URL + inputEl.value;

  fetchCountries(url)
    .then(fetchHandler)
    .catch(error => myError());
}

function fetchHandler(countries) {
  if (countries.length >= 2 && countries.length < 10) {
    renderCountries(countries);
    return;
  }

  if (countries.length > 10) {
    searchResultEl.innerHTML = '';
    myNotice();
    return;
  }

  if (countries.length === 1) {
    const markupCountry = countryCardTemplate(...countries);
    searchResultEl.innerHTML = markupCountry;
    return;
  }
}

function renderCountries(countries) {
  const markupCountries = countriesListTemplate(countries);
  searchResultEl.innerHTML = markupCountries;

  searchResultEl.addEventListener(
    'click',
    event => {
      inputEl.value = event.target.textContent.trim();
      inputedTextHandler();
    },
    { once: true },
  );
}

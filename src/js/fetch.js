import debounce from 'lodash.debounce';
import templateMarkup from '../templates/template.hbs';
import countryCard from '../templates/countrycard.hbs';
import fetchCountries from './fetchCountries.js';
import { myNotice, myError } from './notifications.js';

const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

const inputEl = document.getElementById('input');
const searchResultEl = document.querySelector('.results__box');

inputEl.addEventListener('input', debounce(inputedTextHandler, 500));

function inputedTextHandler() {
  let inputedText = (inputedText = inputEl.value);
  const url = BASE_URL + inputedText;

  fetchCountries(url)
    .then(fetchHandler)
    .finally(() => {
      setTimeout(() => {
        inputEl.value = '';
      }, 3000);
    });
}

function fetchHandler(names) {
  if (names.status === 404) {
    errorMessage();
  }

  if (names.length === 1) {
    renderCountry(names);
  }

  if (names.length > 1 && names.length < 10) {
    renderCountries(names);
  }

  if (names.length > 10) {
    renderNone();
  }
}

function renderCountry(name) {
  const markup2 = countryCard(...name);
  searchResultEl.innerHTML = markup2;
}

function renderCountries(names) {
  const markup = templateMarkup(names);
  searchResultEl.innerHTML = markup;
}

function renderNone() {
  searchResultEl.innerHTML = '';
  myNotice();
  // return console.log('Too much results');
}

function errorMessage() {
  searchResultEl.innerHTML = '';
  myError();
}

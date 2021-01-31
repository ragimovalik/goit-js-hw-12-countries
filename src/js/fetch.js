import debounce from 'lodash.debounce';
import templateMarkup from '../templates/template.hbs';

const url = 'https://restcountries.eu/rest/v2/name/';
const inputImitation = 'united';

const ref = document.querySelector('.results__box');
console.log(ref);

function bravo(charlie) {
  const delta = url + `${charlie}`;

  return fetch(delta)
    .then(res => res.json())
    .then(data => data);
}

function foxtrot(names) {
  const markup = templateMarkup(names);
  ref.insertAdjacentHTML('afterbegin', markup);
}

bravo(inputImitation).then(foxtrot);

import { myError } from './notifications.js';

export default function fetchCountries(searchQuery) {
  return fetch(searchQuery)
    .then(res => {
      if (res.status !== 200) {
        myError();
        return;
      } else return res.json();
    })
    .then(data => data);
}

import { fetchError, myError } from './notifications.js';

export default function fetchCountries(searchQuery) {
  return fetch(searchQuery)
    .then(res => res.json())
    .then(
      data => {
        if (data.status === 404) {
          myError();
        } else return data;
      },
      reason => {
        // fetchError();
        console.log('Error! Some problems on url or connection');
      },
    );
}
export default function fetchCountries(searchQuery) {
  return fetch(searchQuery)
    .then(res => res.json())
    .then(data => data);
}
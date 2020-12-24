import notification from './pnotify.js';

export default function fetchCountries(searchQuery) {
  if (searchQuery === '') {
    return;
  }
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        notification.error('Ошибка 404');
      }
    })
    .then(obj => {
      return obj;
    });
}

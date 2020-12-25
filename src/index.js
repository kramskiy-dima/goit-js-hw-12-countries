import './styles.css';

import notification from './js/pnotify.js';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries';
import countryList from '../templates/counstry-list.hbs';
import countryDescription from '../templates/country.hbs';
import debounce from 'lodash.debounce';
const { query, list, card } = refs;

query.addEventListener('input', debounce(onSearchQuerye, 500));
list.addEventListener('click', onClickCreateCountry);

function onSearchQuerye(e) {
  const value = e.target.value;

  if (value === '') {
    resetList();
    resetCard();
    return;
  }
  fetchCountries(value).then(obj => {
    let length = obj.length;
    resetList();
    resetCard();
    if (length > 10) {
      notification.error('Пожалуйста, введите более конкретный запрос');
    }
    if (length >= 2 && length <= 10) {
      createCountryList(obj);
      notification.notice();
    }
    if (length === 1) {
      resetList();
      createCountryDescription(obj);
      notification.success();
    }
  });
}
function onClickCreateCountry(e) {
  fetchCountries(e.target.innerText)
    .then(obj => {
      resetList();
      createCountryDescription(obj);
    })
    .then(notification.success());

  resetQuery();
}

function resetQuery() {
  query.value = '';
}

function createCountryList(obj) {
  list.insertAdjacentHTML('beforeend', countryList(obj));
}

function createCountryDescription(obj) {
  card.insertAdjacentHTML('beforeend', countryDescription(obj));
}

function resetList() {
  list.innerHTML = '';
}
function resetCard() {
  card.innerHTML = '';
}

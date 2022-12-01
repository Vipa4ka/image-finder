import '../css/index.scss';
import refs from './get-refs.js';
import fetchImage from './apiService.js';
import renderForm from './renderForm.js';
import renderCards from './renderCards';
import imageHbs from '../templete/imageCard.hbs';

renderForm();
renderCards();

const searchInput = document.querySelector('.search-form');
searchInput.addEventListener('submit', onInput);

const gallery = document.querySelector('.gallery');

function onInput(e) {
  e.preventDefault();
  const name = e.currentTarget.elements.query.value;

  fetchImage(name)
    .then(renderImageCards)
    .catch(err => console.log(err));

  function renderImageCards(e) {
    gallery.innerHTML = imageHbs(e);
  }
}

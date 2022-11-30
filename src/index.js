import './css/index.scss';
// import './inputFort';
import refs from './get-refs.js';
import fetchImage from './apiService.js';
import renderCards from './renderCards';
import imageHbs from './imageCard.hbs';

refs.searchInput.addEventListener('submit', onInput);

function onInput(e) {
  e.preventDefault();
  const name = e.currentTarget.elements.query.value;

  fetchImage(name)
    .then(renderImageCards)
    .catch(err => console.log(err));

  function renderImageCards(e) {
    refs.gallery.innerHTML = imageHbs(e);
  }
}

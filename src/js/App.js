import refs from './get-refs.js';
import NewApi from './apiService.js';
import renderForm from './renderForm.js';
import renderCards from './renderCards';
import imageHbs from '../templete/imageCard.hbs';
import onClickBtnMore from './loadMore';
import { onLoading, OnRemoveLoadBtn } from './loadBtn';

renderForm();
renderCards();
onLoading();
const NewAp = new NewApi();

onClickBtnMore;

const searchInput = document.querySelector('.search-form');
searchInput.addEventListener('submit', onInput);

const gallery = document.querySelector('.gallery');

function onInput(e) {
  e.preventDefault();
  // NewAp.resetPage();
  clearSearch();
  OnRemoveLoadBtn();

  NewAp.searchQuery = e.currentTarget.elements.query.value;

  NewAp.fetchImage()
    .then(renderImageCards)
    .catch(err => console.log(err));
  renderImageCards(e);
}

function renderImageCards(e) {
  gallery.innerHTML = imageHbs(e);
}

function clearSearch() {
  gallery.innerHTML = '';
  // NewAp.resetPage();
}

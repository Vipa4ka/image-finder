import refs from './get-refs.js';
import NewApi from './apiService.js';
import renderForm from './renderForm.js';
import renderCards from './renderCards';
import imageHbs from '../templete/imageCard.hbs';
// import onClickBtnMore from './loadMore';
import { onLoading } from './loadBtn';
const NewAp = new NewApi();

renderForm();
renderCards();

// onClickBtnMore;

const searchInput = document.querySelector('.search-form');

searchInput.addEventListener('submit', onInput);

const gallery = document.querySelector('.gallery');

function onInput(e) {
  e.preventDefault();
  NewAp.searchQuery = e.currentTarget.elements.query.value;
  clearSearch();
  fetchImg();
  onLoading();
  const loadMore = document.querySelector('.btn');
  loadMore.addEventListener('click', fetchImg);
}

function fetchImg() {
  // onClickBtnMore;
  onLoading();
  NewAp.fetchImage()
    .then(renderImageCards)
    .catch(err => console.log(err));
  renderImageCards();
  onLoading();
}

function renderImageCards(e) {
  gallery.innerHTML = imageHbs(e);
}

function clearSearch() {
  gallery.innerHTML = '';
  // NewAp.resetPage();
}

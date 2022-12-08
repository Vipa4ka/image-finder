import NewApi from './apiService.js';
import LoadMore from './loadBtn.js';
import renderForm from './renderForm.js';
import renderCards from './renderCards';
import imageHbs from '../templete/imageCard.hbs';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const NewAp = new NewApi();

const LoadMoreBtn = new LoadMore({
  className: 'container-more',
});

renderForm();
renderCards();

const searchInput = document.querySelector('.search-form');
const btnUp = document.querySelector('.back-to-top-wrapper');
searchInput.addEventListener('submit', onInput);
btnUp.addEventListener('.click', buttonScrollUp);
LoadMoreBtn.refs.loadMoreContainer.addEventListener('click', fetchImg);

const gallery = document.querySelector('.gallery');

function onInput(e) {
  e.preventDefault();
  LoadMoreBtn.onLoading();
  NewAp.resetPage();
  clearSearch();
  NewAp.searchQuery = e.currentTarget.elements.query.value;
  fetchImg();
}

function fetchImg() {
  LoadMoreBtn.OnRemoveLoadBtn();
  LoadMoreBtn.onWaitLoading();
  btnUp.hidden = false;
  NewAp.fetchImage()
    .then(a => {
      if (a.hits.length > 0) {
        renderImageCards(a);
        LoadMoreBtn.OnRemoveLoadBtn();
        LoadMoreBtn.onLoading();
        return;
      }
      if (a.hits.length === 0) {
        btnUp.hidden = true;
        onError('Nothing found for your request!');
        return;
      }
    })
    .catch(onError);
}

function renderImageCards(e) {
  gallery.insertAdjacentHTML('beforeend', imageHbs(e));
  scroll();
}
function scroll() {
  gallery.scrollIntoView({ block: 'end', behavior: 'smooth' });
}

function clearSearch() {
  gallery.innerHTML = '';
}

function onError(e) {
  error({
    text: `${e}`,
    hide: true,
    sticker: false,
    delay: 2000,
    addClass: 'errorMessage',
  });
  clearSearch();
  LoadMoreBtn.OnRemoveLoadBtn();
}

function buttonScrollUp() {
  window.scrollBy({
    top: 100,
    left: 0,
    behavior: 'smooth',
  });
}

import './css/index.scss';
import fetchImage from './apiService.js';
import refs from './get-refs.js';

const formCreate = document.createElement('form');
formCreate.classList.add('search-form');
const inputCreate = document.createElement('input');
formCreate.append(inputCreate);

refs.container.append(formCreate);

// <form class="search-form" id="search-form">
//   <input
//     type="text"
//     name="query"
//     autocomplete="off"
//     placeholder="Search images..."
//   />
// </form>;

fetchImage()
  .then(renderImageCards)
  .catch(err => console.log(err));

function renderImageCards(e) {
  console.log(e);
}

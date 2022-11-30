const refs = {
  searchInput: document.querySelector('.search-form'),
  container: document.querySelector('.container'),
  gallery: document.querySelector('.gallery'),
};

export default refs;

// refs.container.innerHTML =
//   '<form class="search-form" id="search-form"><input type="text" name="query" autocomplete="off" placeholder="Search images..."/><button type="submit" class="search ">Search</button></form>';

// refs.searchIput.addEventListener('submit', onClickBtn);

// function onClickBtn(e) {
//   console.log(e);
// }

// fetchImage()
//   .then(renderImageCards)
//   .catch(err => console.log(err));

// function renderImageCards(e) {
//   console.log(e);
// }

export default class LoadMore {
  constructor() {}

  renderLoadMoreBtn() {
    const loadMore = document.querySelector('.container-more');
    // loadMore.addEventListener('click', onclickBtnMore);
  }
  onLoading() {
    const btnMore = document.createElement('button');
    btnMore.classList.add('btn');
    btnMore.textContent = 'load more';
    loadMore.append(btnMore);
  }
}

// const loadMore = document.querySelector('.container-more');
// loadMore.addEventListener('click', onclickBtnMore);
// export function onLoading() {
//   const btnMore = document.createElement('button');
//   btnMore.classList.add('btn');
//   btnMore.textContent = 'load more';
//   loadMore.append(btnMore);
// }

// export function OnRemoveLoadBtn() {
//   loadMore.style.display = 'none';
// }

// function onclickBtnMore() {
//   loadMore.innerHTML = '';
// }

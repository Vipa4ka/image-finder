import refs from './get-refs';

const loadMore = document.querySelector('.container-more');
loadMore.addEventListener('click', onclickBtnMore);
export function onLoading() {
  const btnMore = document.createElement('button');
  btnMore.classList.add('btn');
  btnMore.textContent = 'load more';
  loadMore.append(btnMore);
}

export function OnRemoveLoadBtn() {
  loadMore.style.display = 'none';
}

function onclickBtnMore() {
  loadMore.style.display = 'none';
}

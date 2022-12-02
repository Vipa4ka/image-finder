import onLoading from './loading';

const loadMore = document.querySelector('.container-more');

loadMore.addEventListener('click', onClickBtnMore);

export default function onClickBtnMore() {
  onLoading();

  setTimeout(function () {
    loadMore.classList.remove('loading');
  }, 1000);
}

// $(document).ready(function () {
//   $('.load-more-posts').click(function () {
//     var $link = $(this);
//     $link.addClass('loading');
//     $(this).text('|');
//   });
//   setTimeout(function () {
//     $('.load-more-posts').removeClass('loading').text('load more');
//   }, 2000);
// });

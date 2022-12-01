// const element = document.getElementById('.my-element-selector');
// element.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });
const loadMore = document.querySelector('.load-more-posts');

loadMore.addEventListener('click', onClickBtnMore);

function onClickBtnMore() {
  loadMore.classList.add('loading');
  loadMore.setAttribute('text', '|');

  //   console.log(this);
  //   this.classList.add('loading');
  //   this.text('|');
  setTimeout(function () {
    loadMore.classList.remove('loading');
  }, 500000);
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

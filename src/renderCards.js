import refs from './get-refs';
import imageHbs from './imageCard.hbs';

{
  /* <ul class="gallery">
  <!-- Список <li> с карточками изображений -->
</ul> */
}

export default function renderCards(nameCard) {
  const gallery = document.querySelector('.gallery');
  console.log(nameCard);
  console.log(imageHbs(nameCard));

  //   const cardsList = document.createElement('ul');
  //   cardsList.classList.add('gallery');
  //   refs.container.append(cardsList);
  // gallery.innerHTML = imageHbs(nameCard);
  //   gallery.insertAdjacentHTML('beforeend', imageHbs(nameCard));
}
// refs.container.

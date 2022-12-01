import refs from './get-refs';

export default function renderCards() {
  const cardsList = document.createElement('ul');
  cardsList.classList.add('gallery');
  refs.container.append(cardsList);
}

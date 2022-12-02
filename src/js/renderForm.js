import refs from './get-refs';

export default function renderForm() {
  const form = document.createElement('form');
  form.classList.add('search-form');

  const input = document.createElement('input');
  input.classList.add('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'query');
  input.setAttribute('autocomplete', 'off');
  input.setAttribute('placeholder', 'Search images...');
  form.append(input);

  refs.container.append(form);
}

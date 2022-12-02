const loading = document.querySelector('.loader');

export default function onLoading() {
  const innerOneBtn = document.createElement('div');
  innerOneBtn.classList.add('inner');
  innerOneBtn.classList.add('one');
  loading.append(innerOneBtn);

  const innerTwoBtn = document.createElement('div');
  innerTwoBtn.classList.add('inner');
  innerTwoBtn.classList.add('two');
  loading.append(innerTwoBtn);

  const innerThreeBtn = document.createElement('div');
  innerThreeBtn.classList.add('inner');
  innerThreeBtn.classList.add('three');
  loading.append(innerThreeBtn);
}

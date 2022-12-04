export default class LoadMore {
  constructor({ className }) {
    this.refs = this.getRefs(className);
  }

  getRefs(className) {
    const refs = {};
    refs.loadMoreContainer = document.querySelector('.container-more');

    return refs;
  }

  onLoading() {
    const btnMore = document.createElement('button');
    btnMore.classList.add('btn');
    btnMore.textContent = 'LOAD MORE';
    this.refs.loadMoreContainer.append(btnMore);
  }

  OnRemoveLoadBtn() {
    this.refs.loadMoreContainer.innerHTML = '';
  }
  onWaitLoading() {
    const groupDiv = document.createElement('div');
    groupDiv.classList.add('loader');

    const innerOneBtn = document.createElement('div');
    innerOneBtn.classList.add('inner');
    innerOneBtn.classList.add('one');
    groupDiv.append(innerOneBtn);

    const innerTwoBtn = document.createElement('div');
    innerTwoBtn.classList.add('inner');
    innerTwoBtn.classList.add('two');
    groupDiv.append(innerTwoBtn);

    const innerThreeBtn = document.createElement('div');
    innerThreeBtn.classList.add('inner');
    innerThreeBtn.classList.add('three');

    groupDiv.append(innerThreeBtn);
    this.refs.loadMoreContainer.append(groupDiv);
  }
}

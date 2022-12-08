export default class NewApi {
  constructor() {
    this.page = 1;
    this.image = '';
  }

  async fetchImage() {
    try {
      const BASE_URL =
        'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
      const KEY = '21917669-1fedcfe337ac78c8906ac8c38';
      const response = await fetch(
        `${BASE_URL}&q=${this.image}&page=${this.page}&per_page=12&key=${KEY}`,
      );
      return await response.json();
    } catch {
      throw new Error('Error fatching data');
    }
  }

  resetPage() {
    this.page = 1;
  }

  get searchQuery() {
    return this.image;
  }

  set searchQuery(newImage) {
    this.image = newImage;
  }
}

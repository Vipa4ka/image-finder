export default class NewApi {
  constructor() {
    this.page = 1;
    this.image = '';
  }

  fetchImage() {
    const BASE_URL =
      'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
    const KEY = '21917669-1fedcfe337ac78c8906ac8c38';
    // const page = 5;
    return fetch(
      `${BASE_URL}&q=${this.image}&page=${this.page}&per_page=12&key=${KEY}`,
    ).then(res => {
      {
        if (res.ok) {
          this.page += 1;
          return res.json();
        }
      }
      throw new Error('Error fatching data');
    });
  }

  resetPage() {
    return (this.page = 1);
  }

  get searchQuery() {
    return this.image;
  }

  set searchQuery(newImage) {
    this.image = newImage;
  }
}

// const BASE_URL =
//   'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
// const KEY = '21917669-1fedcfe337ac78c8906ac8c38';
// export default function fetchImage(image) {
//   const page = 5;
//   return fetch(
//     `${BASE_URL}&q=${image}&page=${page}&per_page=12&key=${KEY}`,
//   ).then(res => {
//     {
//       if (res.ok) {
//         page += 1;

//         return res.json();
//       }
//     }
//     throw new Error('Error fatching data');
//   });
// }

const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const KEY = '21917669-1fedcfe337ac78c8906ac8c38';

export default function fetchImage(image) {
  return fetch(`${BASE_URL}&q=cat&page=1&per_page=12&key=${KEY}`).then(res => {
    {
      if (res.ok) return res.json();
    }
    throw new Error('Error fatching data');
  });
}

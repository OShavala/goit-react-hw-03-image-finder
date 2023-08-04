export function fetchImages(query, page = 1) {
  const KEY = '37392322-8e49aa3f08186b4161c160187';
  const MAIN_URL = `https://pixabay.com/api/`;
  return fetch(
    `${MAIN_URL}?key=${KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`
  ).then(response => response.json());
}

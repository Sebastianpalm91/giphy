export default () => {

const searchBar = document.querySelector('.search__input');
const gifImage = document.querySelector('.gifImage');
const gallery = document.querySelector('.gallery');

let query = () => {
  const public_key = 'i5GXdBIapjEbwMFrQR1bn5eOAGWPvyW5';
  const limit = 5;
  const searchGif = searchBar.value;
  const api = `http://api.giphy.com/v1/gifs/search?q=${searchGif}&api_key=${public_key}&limit=1&offset=${limit}`;
    fetch(api)
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);

        const lists = response.data;
        lists.forEach(list => {
          if (!searchGif == "") {
          const result = list.images.downsized_medium.url;
          const newImg = document.createElement('img');
          newImg.classList.add('gifImage');
          newImg.src = result;
          gallery.appendChild(newImg);
        }
        else {
          document.classList.remove('img');
        }
      });
      })
  }
  searchBar.addEventListener('keyup', query);


};

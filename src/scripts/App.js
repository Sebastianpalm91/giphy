import Gallery from './components/Gallery.js';
import NotFound from './components/NotFound.js';
import Giphy from './utils/Giphy.js';

export default class App {

  constructor () {
    this.giphy = new Giphy();

    this.gallery = new Gallery(document.querySelector('.gallery'));
    this.notFound = new NotFound(document.querySelector('.not-found'));

    this.form = document.forms.search;
    this.form.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit (event) {
    event.preventDefault();
    this.gallery.removeItems();
    this.notFound.hide();

    const query = this.form.querySelector('input').value;

    this.giphy.search(query)
      .then(response => {
        if (response.data.length === 0) {
          this.notFound.show(query);
        }
        response.data.forEach(item => this.gallery.addItem(item));
      });
  }
}

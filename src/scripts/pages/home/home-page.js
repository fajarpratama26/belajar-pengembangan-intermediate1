import {
  generateLoaderAbsoluteTemplate,
  generateStoryItemTemplate,
  generateStoriesListEmptyTemplate,
  generateStoriesListErrorTemplate,
} from '../../templates';

import Map from '../../utils/map';
import HomePresenter from './home-presenter';
import * as StoryAPI from '../../data/api';

export default class HomePage {
  #presenter = null;
  #map = null;

  async render() {
    return `
        <section>
          <div class="stories-list__map__container">
            <div id="map" class="stories-list__map"></div>
            <div id="map-loading-container"></div>
          </div>
        </section>
  
        <section class="container">
          <h1 class="section-title">Daftar Cerita</h1>
          <div class="stories-list__container">
            <div id="stories-list"></div>
            <div id="stories-list-loading-container"></div>
          </div>
        </section>
      `;
  }

  async afterRender() {
    this.#presenter = new HomePresenter({
      view: this,
      model: StoryAPI,
    });

    await this.#presenter.initialGalleryAndMap();
  }

  populateStoriesList(message, stories) {
    if (stories.length <= 0) {
      this.populateStoriesListEmpty();
      return;
    }

    const html = stories.reduce((accumulator, story) => {
      if (this.#map && story.lat != null && story.lon != null) {
        const coordinate = [story.lat, story.lon];
        const markerOptions = { alt: story.name };
        const popupOptions = { content: story.description };
        this.#map.addMarker(coordinate, markerOptions, popupOptions);
        console.log(story.description);
      }
      return accumulator.concat(
        generateStoryItemTemplate({
          ...story,
          reporterName: story.name,
        }),
      );
    }, '');

    document.getElementById('stories-list').innerHTML = `
        <div class="stories-list">${html}</div>
      `;
  }

  populateStoriesListEmpty() {
    document.getElementById('stories-list').innerHTML = generateStoriesListEmptyTemplate();
  }

  populateStoriesListError(message) {
    document.getElementById('stories-list').innerHTML = generateStoriesListErrorTemplate(message);
  }

  async initialMap() {
    try {
      this.#map = await Map.build('#map', {
        zoom: 10,
        locate: true,
      });
    } catch (error) {
      console.error('initialMap: error:', error);
      // fallback tanpa locate
      this.#map = await Map.build('#map', {
        zoom: 10,
        locate: false,
      });
    }
  }

  showMapLoading() {
    document.getElementById('map-loading-container').innerHTML = generateLoaderAbsoluteTemplate();
  }

  hideMapLoading() {
    document.getElementById('map-loading-container').innerHTML = '';
  }

  showLoading() {
    document.getElementById('stories-list-loading-container').innerHTML =
      generateLoaderAbsoluteTemplate();
  }

  hideLoading() {
    document.getElementById('stories-list-loading-container').innerHTML = '';
  }
}

class ApiService {
  constructor() {
    this.apiURl = `https://www.flickr.com/services/rest/`;
    this.apiKey = '&api_key=d31c1039b43c1e518fbcebb4ac703d69';
    this.methods = {
      photo: '?method=flickr.photos.search',
      getSize: '?method=flickr.photos.getSizes',
      getInfo: '?method=flickr.photos.getInfo',
    };
  }

  async getData(searchValue, searchOptions) {
    const res = await fetch(
      `${this.apiURl}${this.methods.photo}${this.apiKey}&text=${searchValue}&format=json&nojsoncallback=1&sort=${searchOptions.sort}&per_page=${searchOptions.resultsPerPage}&page=${searchOptions.currentPage}`
    );
    const data = await res.json();

    return data;
  }

  async getImage(id) {
    const res = await fetch(
      `${this.apiURl}${this.methods.getSize}${this.apiKey}&photo_id=${id}&format=json&nojsoncallback=1`
    );
    const data = await res.json();

    return data;
  }

  getDataWithImages(data, imageQuality) {
    return data.photos.photo.map(async (item) => {
      const imgData = await this.getImage(item.id);
      const imgUrl = imgData.sizes.size[imageQuality].source;

      return { ...item, url: imgUrl };
    });
  }

  async getInfo(id) {
    const res = await fetch(
      `${this.apiURl}${this.methods.getInfo}${this.apiKey}&photo_id=${id}&format=json&nojsoncallback=1`
    );
    const data = await res.json();

    return data;
  }
}

export default ApiService;

class ApiService {
  constructor() {
    this.apiURl = `https://www.flickr.com/services/rest/?method=flickr.photos.search`;
    this.apiKey = 'd31c1039b43c1e518fbcebb4ac703d69';
  }

  async getData(searchValue, searchOptions) {
    const res = await fetch(
      `${this.apiURl}&api_key=${this.apiKey}&text=${searchValue}&format=json&nojsoncallback=1&sort=${searchOptions.sort}&per_page=${searchOptions.resultsPerPage}&page=${searchOptions.currentPage}`
    );
    const data = await res.json();
    return data;
  }
}

export default ApiService;

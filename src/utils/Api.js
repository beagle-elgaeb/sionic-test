class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getProducts() {
    return fetch(`${this._baseUrl}/Products`).then(this._handleResult);
  }

  _handleResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Статут ошибки: ${res.status}`);
  }
}

const api = new Api({
  baseUrl: "https://test2.sionic.ru/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _checkResponse = (res) =>
    res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res.status}`);

  _request(url, options) {
    return fetch(`${this._url}${url}`, options).then(this._checkResponse);
  }

  getUserData(token) {
    return this._request("/users/me", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
  }

  login(email, password) {
    return this._request("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  }

  register(name, email, password) {
    return this._request("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
  }

  checkUserToken(token) {
    return this._request("/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  setUserInfo(name, email, token) {
    return this._request("/users/me", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
  }

  getMovies(token) {
    return this._request("/movies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  addMovie(data, token) {
    return this._request('/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        description: data.description,
        year: data.year,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN
      })
    })
  }

  deleteMovie(cardId, token) {
    return this._request(`/movies/${cardId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
const mainApi = new MainApi({
  baseUrl: "https://api.diploma69.gamzat.nomoredomainsrocks.ru",
});

export default mainApi;

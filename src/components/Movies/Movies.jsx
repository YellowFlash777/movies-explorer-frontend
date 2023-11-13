import "./Movies.css";
import moviesApi from "../../utils/MoviesApi";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import { useCallback, useEffect, useState } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { ShortMovieDuration } from "../../utils/constants";
import Header from "../Header/Header";

export default function Movies({ loggedIn, name, savedMovies, setIsError, addMovie }) {

  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [firstEntry, setFirstEntry] = useState(true);

  const filter = useCallback((search, isCheck, movies) => {
    setSearchedMovies(search);
    localStorage.setItem("movie", JSON.stringify(search));
    localStorage.setItem("shorts", JSON.stringify(isCheck));
    localStorage.setItem("allmovies", JSON.stringify(movies));
    setFilteredMovies(
      movies.filter((movie) => {
        const searchName =
          movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(search.toLowerCase());
        return isCheck
          ? searchName && movie.duration <= ShortMovieDuration
          : searchName;
      })
    );
  }, []);

  function searchMovies(search) {
    if (allMovies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then(res => {
          setAllMovies(res);
          setIsCheck(false);
          setServerError(false);
          setFirstEntry(false);
          filter(search, isCheck, res);
          console.log(moviesApi.getMovies());
        })
        .catch((err) => {
          setServerError(true);
          console.error(`Ошибка при поске фильмов ${err}`);
        })
        .finally(() => setIsLoading(false));
    } else {
      filter(search, isCheck, allMovies);
    }
  }

  useEffect(() => {
    if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
      const movies = JSON.parse(localStorage.allmovies) || [];
      const search = JSON.parse(localStorage.movie || " ");
      const isCheck = JSON.parse(localStorage.shorts) || false;
      setServerError(false);
      setFirstEntry(false);
      setSearchedMovies(search);
      setIsCheck(isCheck);
      setAllMovies(movies);
      filter(search, isCheck, movies);
    }
  }, [filter]);



  return (
    <>

      <Header loggedIn={loggedIn} name="movies" />
      <main className="main">
        <SearchForm
          name="movies"
          isCheck={isCheck}
          searchMovies={searchMovies}
          searchedMovie={searchedMovies}
          firstEntry={firstEntry}
          setIsError={setIsError}
          savedMovies={savedMovies}
          movies={allMovies}
          filter={filter}
          setIsCheck={setIsCheck}
        />

        <MoviesCardList
          name={name}
          addMovie={addMovie}
          setIsError={setIsError}
          movies={filteredMovies}
          savedMovies={savedMovies}
          allMovies={allMovies}
          isLoading={isLoading}
          serverError={serverError}
          firstEntry={firstEntry}
        />
      </main>
      <Footer />
    </>
  );
}

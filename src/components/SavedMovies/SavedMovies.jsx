import SearchForm from "../Movies/SearchForm/SearchForm";
import { useCallback, useEffect, useState } from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { ShortMovieDuration } from "../../utils/constants";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function SavedMovies({
  loggedIn, savedMovies, setIsError, name, delMovie
}) {

  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [searchedMovies, setSearchedMovies] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [firstEntry, setFirstEntry] = useState(true);

  const filter = useCallback((search, isCheck, movies) => {
    setSearchedMovies(search);
    setFilteredMovies(
      movies.filter((movie) => {
        const searchName = movie.nameRU
          .toLowerCase()
          .includes(search.toLowerCase());
        return isCheck
          ? searchName && movie.duration <= ShortMovieDuration
          : searchName;
      })
    );
  }, []);

  function searchMovies(search) {
    setFirstEntry(false);
    filter(search, isCheck, savedMovies);
  }
  useEffect(() => {
    if (savedMovies.length === 0) {
      setFirstEntry(true);
    } else {
      setFirstEntry(false);
    }
    filter(searchedMovies, isCheck, savedMovies);
  }, [filter, savedMovies, isCheck, searchedMovies]);



  return (
    <>
      <Header loggedIn={loggedIn} name="movies"/>
      <main className="main">
        <SearchForm
          isCheck={isCheck}
          searchMovies={searchMovies}
          searchedMovie={searchedMovies}
          firstEntry={firstEntry}
          savedMovie={savedMovies}
          setIsError={setIsError}
          movies={savedMovies}
          filter={filter}
          setIsCheck={setIsCheck}
        />
        <MoviesCardList
          name={name}
          delMovie={delMovie}
          savedMovies={savedMovies}
          movies={filteredMovies}
          firstEntry={firstEntry}
        />
      </main>
      <Footer />
    </>
  );
}

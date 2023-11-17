import "./MoviesCard.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LikeButton from "../ButtonLike/LikeButton";
import DeleteButton from "../ButtonDel/DeleteButton";

export default function MoviesCard({
  name,
  data,
  savedMovies,
  addMovie,
  delMovie,
}) {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (pathname === "/movies")
      setClick(savedMovies.some((item) => data.id === item.movieId));
  }, [savedMovies, data.id, setClick, pathname]);

  function onAdd() {
    if (savedMovies.some((item) => data.id === item.movieId)) {
      setClick(true);
      addMovie(data);
    } else {
      setClick(false);
      addMovie(data);
    }
  }

  function convertTime(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return hours === 0
      ? `${minutes}м`
      : minutes === 0
      ? `${hours}ч`
      : `${hours}ч${minutes}м`;
  }

  return (
    <li className="movies-card">
      <article>
        <Link to={data.trailerLink} target="_blank">
          <img
            className="movies-card__image"
            src={
              pathname === "/movies"
                ? `https://api.nomoreparties.co${data.image.url}`
                : data.image
            }
            alt={data.name}
          />
        </Link>
        <div className="movies-card__container">
          <div className="movies-card__wrapper">
            <p className="movies-card__caption">{data.nameRU}</p>
            <span className="movies-card__duration">
              {convertTime(data.duration)}
            </span>
          </div>
          {pathname === "/movies" ? (
            <LikeButton
              onClick={onAdd}
              click={click}
              savedMovies={savedMovies}
            ></LikeButton>
          ) : (
            <DeleteButton delMovie={delMovie} data={data}></DeleteButton>
          )}
        </div>
      </article>
    </li>
  );
}




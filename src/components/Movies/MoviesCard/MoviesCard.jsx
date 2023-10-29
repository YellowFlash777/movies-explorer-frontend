import "./MoviesCard.css";
import cardOne from "../../../images/pic__COLOR_pic.png";
import cardTwo from "../../../images/pic__COLOR_pic (1).png";
import cardThree from "../../../images/pic__COLOR_pic (2).png";
import cardFour from "../../../images/pic__COLOR_pic (3).png";
export default function MoviesCard() {
  return (
    <section className="movies-card">
      <div className="movie-card__page">
        <div className="movies-card__container">
          <img
            src={cardOne}
            alt="карточка фильма"
            className="movie-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movie-card__caption">33 слова о дизайне</p>
            <button className="movie-card__button"></button>
          </div>
          <span className="movie-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardTwo}
            alt="карточка фильма"
            className="movie-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movie-card__caption">33 слова о дизайне</p>
            <button className="movie-card__button movie-card__button_active"></button>
          </div>
          <span className="movie-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardThree}
            alt="карточка фильма"
            className="movie-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movie-card__caption">33 слова о дизайне</p>
            <button className="movie-card__button"></button>
          </div>
          <span className="movie-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardFour}
            alt="карточка фильма"
            className="movie-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movie-card__caption">33 слова о дизайне</p>
            <button className="movie-card__button"></button>
          </div>
          <span className="movie-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardOne}
            alt="карточка фильма"
            className="movie-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movie-card__caption">33 слова о дизайне</p>
            <button className="movie-card__button"></button>
          </div>
          <span className="movie-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardTwo}
            alt="карточка фильма"
            className="movie-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movie-card__caption">33 слова о дизайне</p>
            <button className="movie-card__button movie-card__button_active"></button>
          </div>
          <span className="movie-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardThree}
            alt="карточка фильма"
            className="movie-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movie-card__caption">33 слова о дизайне</p>
            <button className="movie-card__button"></button>
          </div>
          <span className="movie-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardFour}
            alt="карточка фильма"
            className="movie-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movie-card__caption">33 слова о дизайне</p>
            <button className="movie-card__button"></button>
          </div>
          <span className="movie-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardOne}
            alt="карточка фильма"
            className="movie-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movie-card__caption">33 слова о дизайне</p>
            <button className="movie-card__button"></button>
          </div>
          <span className="movie-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardTwo}
            alt="карточка фильма"
            className="movie-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movie-card__caption">33 слова о дизайне</p>
            <button className="movie-card__button movie-card__button_active"></button>
          </div>
          <span className="movie-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardThree}
            alt="карточка фильма"
            className="movie-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movie-card__caption">33 слова о дизайне</p>
            <button className="movie-card__button"></button>
          </div>
          <span className="movie-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardFour}
            alt="карточка фильма"
            className="movie-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movie-card__caption">33 слова о дизайне</p>
            <button className="movie-card__button"></button>
          </div>
          <span className="movie-card__duration">1ч42м</span>
        </div>
      </div>
      <button className="movie-card__button-preload hover__button">Ещё</button>
    </section>
  );
}

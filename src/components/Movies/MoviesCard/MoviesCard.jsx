import "./MoviesCard.css";
import cardOne from "../../../images/pic__COLOR_pic.png";
import cardTwo from "../../../images/pic__COLOR_pic (1).png";
import cardThree from "../../../images/pic__COLOR_pic (2).png";
import cardFour from "../../../images/pic__COLOR_pic (3).png";
export default function MoviesCard() {
  return (




    <section className="movies-card">
      <div className="movies-card__page">
        <div className="movies-card__container">
          <img
            src={cardOne}
            alt="карточка фильма"
            className="movies-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movies-card__caption">33 слова о дизайне</p>
            <button className="movies-card__button"></button>
          </div>
          <span className="movies-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardTwo}
            alt="карточка фильма"
            className="movies-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movies-card__caption">33 слова о дизайне</p>
            <button className="movies-card__button movies-card__button_active"></button>
          </div>
          <span className="movies-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardThree}
            alt="карточка фильма"
            className="movies-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movies-card__caption">33 слова о дизайне</p>
            <button className="movies-card__button"></button>
          </div>
          <span className="movies-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardFour}
            alt="карточка фильма"
            className="movies-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movies-card__caption">33 слова о дизайне</p>
            <button className="movies-card__button"></button>
          </div>
          <span className="movies-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardOne}
            alt="карточка фильма"
            className="movies-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movies-card__caption">33 слова о дизайне</p>
            <button className="movies-card__button"></button>
          </div>
          <span className="movies-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardTwo}
            alt="карточка фильма"
            className="movies-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movies-card__caption">33 слова о дизайне</p>
            <button className="movies-card__button movies-card__button_active"></button>
          </div>
          <span className="movies-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardThree}
            alt="карточка фильма"
            className="movies-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movies-card__caption">33 слова о дизайне</p>
            <button className="movies-card__button"></button>
          </div>
          <span className="movies-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardFour}
            alt="карточка фильма"
            className="movies-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movies-card__caption">33 слова о дизайне</p>
            <button className="movies-card__button"></button>
          </div>
          <span className="movies-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardOne}
            alt="карточка фильма"
            className="movies-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movies-card__caption">33 слова о дизайне</p>
            <button className="movies-card__button"></button>
          </div>
          <span className="movies-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardTwo}
            alt="карточка фильма"
            className="movies-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movies-card__caption">33 слова о дизайне</p>
            <button className="movies-card__button movies-card__button_active"></button>
          </div>
          <span className="movies-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardThree}
            alt="карточка фильма"
            className="movies-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movies-card__caption">33 слова о дизайне</p>
            <button className="movies-card__button"></button>
          </div>
          <span className="movies-card__duration">1ч42м</span>
        </div>

        <div className="movies-card__container">
          <img
            src={cardFour}
            alt="карточка фильма"
            className="movies-card__image"
          />
          <div className="movies-card__wrapper">
            <p className="movies-card__caption">33 слова о дизайне</p>
            <button className="movies-card__button"></button>
          </div>
          <span className="movies-card__duration">1ч42м</span>
        </div>
      </div>
      <button className="movies-card__button-preload hover-button">Ещё</button>
    </section>
  );
}

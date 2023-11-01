import "./Profile.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

export default function SavedMovies() {
  return (
    <>
      <Header />
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>

        <div className="profile__container">
          <div className="profile__container-wrapper">
            <label className="profile__text-label profile__text-label-first">
              Имя
            </label>
            <input
              className="profile__text-input profile__text-input_first"
              type="text"
              placeholder="Виталий"
              minLength="2"
              maxLength="40"
            />
          </div>

          <div className="profile__container-wrapper profile__container-wrapper_border">
            <label className="profile__text-label profile__text-label-last">
              Email
            </label>
            <input
              className="profile__text-input"
              type="email"
              placeholder="pochta@yandex.ru"
              minLength="2"
              maxLength="40"
            />
          </div>
          <button type="submit" className="profile__button-edit hover-button">
            Редактировать
          </button>
          <Link to="/" className="profile__link-exit hover-button">
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </>
  );
}

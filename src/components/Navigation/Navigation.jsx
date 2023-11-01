import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from "../../images/account-icon.svg";

export default function Navigation({ handleClose }) {
  function handleCloseOverlay(evt) {
    if (evt.target.classList.contains("navigation")) {
      return handleClose();
    }
  }
  return (
    <section className="navigation" onClick={handleCloseOverlay}>
      <div className="navigation__container">
        <button
          className="navigation__close-button"
          type="button"
          onClick={handleClose}
        />
        <ul className="navigation__lists">
          <li className="navigation__list">
            <Link className="navigation__link" to="/">
              Главная
            </Link>
          </li>
          <li className="navigation__list">
            <Link className="navigation__link" to="/movies">
              Фильмы
            </Link>
          </li>
          <li className="navigation__list">
            <Link className="navigation__link" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link to={"/profile"} className="navigation__profile">
          Аккаунт
          <img
            src={logo}
            className="header__account-image_dark navigation__profileButton"
            alt="Логотип профиля"
          />
        </Link>
      </div>
    </section>
  );
}

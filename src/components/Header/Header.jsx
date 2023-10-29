import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
export default function Header() {
  const { pathname } = useLocation();
  return pathname === "/" ? (
    <header className={"header header__wrapper"}>
      <div className="header__logo hover__link"></div>
      <nav className="header__navigation">
        <Link to={"/signup"} className="header__registration hover__link">
          Регистрация
        </Link>
        <Link to={"/signin"} className="header__signin hover__link">
          Войти
        </Link>
      </nav>
    </header>
  ) : (
    (pathname === "/movies",
    (
      <header className={"header__wrapper header_theme_dark"}>
        <div className="header__logo hover__link"></div>
        <nav className="header__navigation header__movies_navigation">
          <Link
            to={"/movies"}
            className="header__movies header__link hover__link"
          >
            Фильмы
          </Link>
          <Link
            to={"/saved-movies"}
            className="header__saved-movies header__link hover__link"
          >
            Сохраненные фильмы
          </Link>
        </nav>
        <div className="header__account-wrapper">
          <Link to="/profile" className="header__account hover__link">
            Аккаунт
          </Link>
          <div className="header__account-image_dark"></div>
        </div>
        <BurgerMenu />
      </header>
    ))
  );
}

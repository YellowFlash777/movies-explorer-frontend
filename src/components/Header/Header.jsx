import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logoProfile from "../../images/account-icon.svg"
export default function Header({ loggedIn }) {
     const { pathname } = useLocation();
    return !loggedIn ? (
      <header
        className={
          pathname === "/" ? "header" : "header header_theme_dark"
        }
      >
       <Link to={"/"}> <div className="header__logo hover-link"></div>
       </Link>
        <nav className="header__navigation">
          <Link to={"/signup"} className="header__registration hover-link">
            Регистрация
          </Link>
          <Link to={"/signin"} className="header__signin hover-link">
            Войти
          </Link>
        </nav>
      </header>
    ) : (
      <header
        className={
          pathname === "/" ? "header" : "header header_theme_dark"
        }
      >
        <Link to="/">
          <div className="header__logo hover-link"></div>
        </Link>
        <nav className="header__navigation header__navigation_movies">
          <Link
            to={"/movies"}
            className={
              pathname === "/movies"
                ? "header__nav hover-link header__nav_display_none"
                : "header__nav hover-link"
            }
          >
            Фильмы
          </Link>
          <Link
            to={"/saved-movies"}
            className={
              pathname === "/saved-movies"
                ? "header__nav hover-link header__nav_display_none"
                : "header__nav hover-link"
            }
          >
            Сохраненные фильмы
          </Link>
        </nav>

        <Link to="/profile" className="header__profile hover-link">
          Аккаунт
          <img
          className={
            pathname === "/"
              ? "header__account-image-dark"
              : "header__logoProfile_theme_dark"
          }
          src={logoProfile}
          alt="Логотип профиля"
        />
        </Link>
        <BurgerMenu />
      </header>
    );
  }






























































//   return pathname === "/" ? (
//     <header className={"header header-wrapper"}>
//       <div className="header__logo hover-link"></div>
//       <nav className="header__navigation">
//         <Link to={"/signup"} className="header__registration hover-link">
//           Регистрация
//         </Link>
//         <Link to={"/signin"} className="header__signin hover-link">
//           Войти
//         </Link>
//       </nav>
//     </header>
//   ) : (
//     (pathname === "/movies",
//     (
//       <header className={"header header_theme_dark"}>
//         <Link to="/">
//           <div className="header__logo hover-link"></div>
//         </Link>
//         <nav className="header__navigation header__navigation_movies">
//           <Link
//             to={"/movies"}
//             className="header__movies header__link hover-link"
//           >
//             Фильмы
//           </Link>
//           <Link
//             to={"/saved-movies"}
//             className="header__saved-movies header__link hover-link"
//           >
//             Сохраненные фильмы
//           </Link>
//         </nav>
//         <div className="header__account-wrapper">
//           <Link to="/profile" className="header__account hover-link">
//             Аккаунт
//           </Link>
//           <div className="header__account-image-dark"></div>
//         </div>
//         <BurgerMenu />
//       </header>
//     ))
//   );
// }

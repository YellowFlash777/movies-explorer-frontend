import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <nav className="footer__navigation">
        <span className="footer__text">©2020</span>
        <ul className="footer__lists">
          <li className="footer__list">
            <Link
              to={"https://practicum.yandex.ru/"}
              className="footer__navigation-link hover__link"
              target="_blank"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__list">
            <Link
              to={"https://github.com/"}
              className="footer__navigation-link hover__link"
              target="_blank"
            >
              Github
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

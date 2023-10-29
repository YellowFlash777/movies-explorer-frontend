import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__nav">
        <ul className="portfolio__lists">
          <li className="portfolio__list">
            <Link
              to={"https://github.com/YellowFlash777/how-to-learn"}
              target="_blank"
              className="portfolio__link hover__link"
            >
              <p className="portfolio__text">Статичный сайт</p>
              <button type="button" className="portfolio__button"></button>
            </Link>
          </li>
          <li className="portfolio__list">
            <Link
              to={"https://github.com/YellowFlash777/russian-travel"}
              target="_blank"
              className="portfolio__link hover__link"
            >
              <p className="portfolio__text">Адаптивный сайт</p>
              <button type="button" className="portfolio__button"></button>
            </Link>
          </li>
          <li className="portfolio__list">
            <Link
              to={"https://github.com/YellowFlash777/react-mesto-auth"}
              target="_blank"
              className="portfolio__link hover__link"
            >
              <p className="portfolio__text">Одностраничное приложение</p>
              <button type="button" className="portfolio__button"></button>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

import { Link } from "react-router-dom";
import "./AboutMe.css";
import image from "../../../images/aboutMe.png";
export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="main-title about-me__title">Студент</h2>
      <div className="about-me__wrapper">
        <div className="about-me__info">
          <h3 className="about-me__paragraph">Виталий</h3>
          <p className="about-me__text">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            className="about-me__link hover-link"
            to={"https://github.com/YellowFlash777"}
            target="_blank"
          >
            Github
          </Link>
        </div>
        <img
          className="about-me__image"
          src={image}
          alt="фотография студента выполневшего работу"
        />
      </div>
    </section>
  );
}

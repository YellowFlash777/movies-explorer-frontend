import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="main__title about-project__title">О проекте</h2>
      <div className="about-project__container">
        <h3 className="about-project__text">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="about-project__text">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__paragraph">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about-project__paragraph">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__table">
        <p className="about-project__table-style about-project__table-green-week">
          1 неделя
        </p>
        <p className="about-project__table-style about-project__table-black-week">
          4 недели
        </p>
        <p className="about-project__table-subtitle">Back-end</p>
        <p className="about-project__table-subtitle">Front-end</p>
      </div>
    </section>
  );
}

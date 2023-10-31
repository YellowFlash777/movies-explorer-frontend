import React from "react";
import "./Promo.css";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__text">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="promo__button hover-button" type="button">
          Узнать больше
        </button>
      </div>
      <div className="promo__image"></div>
    </section>
  );
}

import { useState } from "react";
import "./SearchForm.css";
export default function SearchForm() {

const [isActive, setIsActive] = useState(false);

function toggleState() {
  setIsActive(prevState => !prevState);
}


  return (
    <section className="search">
      <form className="search__form form">
        <div className="search__form-input-container">
          <input
            type="text"
            className="search__form-input"
            placeholder="Фильм"
            name="searchInput"
            required
          />

          <button className="search__form-button hover-button" type="submit" />
        </div>

        <div className="search__checkbox-container">
          <button
            className={`search__icon-tumbler-active ${isActive ? 'search__icon-tumbler-active': 'search__icon-tumbler-disabled'} button-hover`}
            type="button"
            onClick={toggleState}
          ></button>
          <span className="search__checkbox-caption">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

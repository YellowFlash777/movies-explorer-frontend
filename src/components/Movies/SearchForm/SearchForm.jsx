import "./SearchForm.css";
export default function SearchForm() {
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

          <button className="search__form-button hover__button" type="submit" />
        </div>

        <div className="search__checkbox-container">
          <button
            className="search__icon-tumbler button-hover"
            type="button"
          ></button>
          <span className="search__checkbox-caption">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

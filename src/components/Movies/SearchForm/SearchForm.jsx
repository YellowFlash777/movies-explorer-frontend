import { useEffect, useState } from "react";
import "./SearchForm.css";
import useFormValidation from "../../../utils/validation";
import { useLocation } from "react-router-dom";

export default function SearchForm({
  name,
  isCheck,
  changeShort,
  searchedMovies,
  searchMovies,
  setIsError,
  firstEntry,
  savedMovies,
  movies,
  filter,
  setIsCheck,
}) {
  const { reset, handleChange, value } = useFormValidation();
  const { pathname } = useLocation();


  useEffect(() => {
    const savedSearch = localStorage.getItem("searchInputValue");
    if (savedSearch && pathname !== "/saved-movies") {
      reset({ searchInput: savedSearch });
    } else {
      reset({ searchInput: "" });
    }
  }, [savedMovies, name]);


  function onSubmit(evt) {
    evt.preventDefault();
    const searchInputValue = evt.target.searchInput.value;
    if (evt.target.searchInput.value) {
      searchMovies(evt.target.searchInput.value);
      setIsError(false);
    } else {
      setIsError(true);
    }
    if (searchInputValue && pathname === "/movies") {
      localStorage.setItem("searchInputValue", searchInputValue);
    }
  }

  function changeShort() {
    if (isCheck) {
      setIsCheck(false);
      filter(value.searchInput, false, movies);
    } else {
      setIsCheck(true);
      filter(value.searchInput, true, movies);
    }
    if (pathname === "/movies") {
      localStorage.setItem("searchInputValue", value.searchInput || "");
    }
  }

  return (
    <section className="search">
      <form className="search__form form" noValidate onSubmit={onSubmit}>
        <div className="search__form-input-container">
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            className="search__form-input"
            placeholder="Фильм"
            value={value.searchInput || ""}
            required
            onChange={(evt) => {
              handleChange(evt);
              setIsError(false)
            }}
          />
          <button className="search__form-button hover-button" type="submit" />
        </div>

        <div className="search__checkbox-container">
          <input
            type="checkbox"
            id="searchCheckbox"
            name="searchCheckbox"
            className="search__icon-tumbler"
            checked={isCheck}
            onChange={() => changeShort()}
          />
          <span className="search__checkbox-span"></span>
          <span className="search__checkbox-caption">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

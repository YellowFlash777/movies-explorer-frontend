import "./Profile.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { emailRegex } from "../../utils/constants";
import CurrentUserContext from "../../context/CurrentUserContext";
import useFormValidation from "../../utils/validation";

export default function Profile({
  loggedIn,
  logout,
  isSucess,
  editUserData,
  isEditProfile,
  setEditProfile,
}) {
  const [isUserDataChanged, setIsUserDataChanged] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const {
    value,
    errors,
    isInputValue,
    isValid,
    handleChange,
    resetForm,
    setValues,
    setIsValid,
  } = useFormValidation();

  // Значения в инпутах
  useEffect(() => {
    setValues("name", currentUser.name);
    setValues("email", currentUser.email);
  }, [currentUser, setValues]);

  // Кнопка для отправки данных
  function handleSubmit(evt) {
    evt.preventDefault();
    editUserData(value.name, value.email, resetForm);
    setIsValid(false);
  }

// Проверка изменения данных в инпутах
  useEffect(() => {
    if (value.name !== currentUser.name || value.email !== currentUser.email) {
      setIsUserDataChanged(true);
    } else {
      setIsUserDataChanged(false);
    }
  }, [value?.name, value?.email, currentUser?.name, currentUser?.email]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser?.name}!`}</h1>
        <div className="profile__container">
          <form
            className="profile__container-form"
            noValidate
            onSubmit={handleSubmit}
            isValid={isValid}
          >
            <label className="profile__container-wrapper">
              <span className="profile__container-span">Имя</span>
              <input
                className= "profile__text-input profile__text-input_first"
                name="name"
                id="name"
                type="text"
                minLength="2"
                maxLength="30"
                placeholder="Введите имя"
                value={value.name || ""}
                onChange={handleChange}
              />
            </label>

            <label className="profile__container-wrapper profile__container-wrapper_border">
              <span className="profile__container-span">E-mail</span>
              <input
                className={`profile__text-input ${isInputValue.name === undefined|| isInputValue.name ? '' : 'profile__info-text_invalid'}`}
                name="email"
                type="email"
                id="email"
                required={true}
                placeholder="Введите почту"
                value={value.email || ""}
                pattern={emailRegex}
                disabled={!isEditProfile}
                onChange={handleChange}
              />
            </label>
            <span className="profile__error">{errors.email}</span>
          </form>
          <button
            type="submit"
            className={`profile__button-edit hover-button ${isValid && isUserDataChanged ? '' : 'profile__button-disabled'}`}  disabled={!isValid || !isUserDataChanged}
            onClick={handleSubmit}
          >
            Редактировать
          </button>
          <Link
            to="/"
            className="profile__link-exit hover-button"
            onClick={logout}
          >
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </>
  );
}








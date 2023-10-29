import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/headerLogo.svg";

export default function Register() {
  return (
    <section className="register">
      <Link to="/" className="register__logo-link">
        <img src={logo} alt="логотип" className="register__logo hover__link" />
      </Link>
      <h1 className="register__title">Добро пожаловать!</h1>

      <form className="register__form form">
        <label className="auth__label register__label-name">Имя</label>
        <input
          type="text"
          id="UserName"
          name="UserName"
          className="auth__input register__input"
          placeholder="Виталий"
          required=""
          minLength="2"
          maxLength="40"
        />
        <label className="auth__label register__label-email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          className="auth__input register__input"
          placeholder="pochta@yandex.ru"
          required=""
          minLength="2"
          maxLength="40"
        />
        <label className="auth__label register__label-password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          className="auth__input register__input register__input_password"
          placeholder="••••••••••••••"
          required=""
          minLength="2"
          maxLength="40"
        />
        <span className="auth__error"></span>
        <button
          className="auth__submit register__button hover__button"
          type="submit"
        >
          Зарегистрироваться
        </button>
        <p className="auth__subtitle register__subtitle">
          Уже зарегистрированы?{" "}
          <Link to="/signin" className="auth__subtitle-link hover__link">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

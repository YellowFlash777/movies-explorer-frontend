import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/headerLogo.svg";

export default function Login() {
  return (
    <section className="login">
      <Link to="/" className="register__logo-link">
        <img src={logo} alt="логотип" className="register__logo hover__link" />
      </Link>
      <h1 className="register__title login__title">Рады видеть!</h1>

      <form className="register__form form">
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
          placeholder=""
          required=""
          minLength="2"
          maxLength="40"
        />
        <span className="auth__error"></span>
        <button
          className="auth__submit register__button login__button hover__button"
          type="submit"
        >
          Войти
        </button>
        <p className="auth__subtitle register__subtitle login__subtitle">
          Ещё не зарегистрированы?{" "}
          <Link to="/signup" className="auth__subtitle-link hover__link">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/headerLogo.svg";

export default function Login() {
  return (
    <section className="auth">
      <Link to="/" className="auth__logo-link">
        <img src={logo} alt="логотип" className="auth__logo hover-link" />
      </Link>
      <h1 className="auth__title auth__title-login">Рады видеть!</h1>

      <form className="auth__form form">
        <label className="auth__label auth__label-email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          className="auth__input auth__input-register"
          placeholder="pochta@yandex.ru"
          required=""
          minLength="2"
          maxLength="40"
        />
        <label className="auth__label auth__label-password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          className="auth__input auth__input-register"
          placeholder=""
          required=""
          minLength="2"
          maxLength="40"
        />
        <span className="auth__error auth__error-login"></span>
        <button
          className="auth__submit auth__submit-register hover-button"
          type="submit"
        >
          Войти
        </button>
        <p className="auth__subtitle auth__subtitle-register auth__subtitle-login">
          Ещё не зарегистрированы?{" "}
          <Link to="/signup" className="auth__subtitle-link hover-link">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/headerLogo.svg";

export default function Register() {
  return (
    <section className="auth">
      <Link to="/" className="auth__logo-link">
        <img src={logo} alt="логотип" className="auth__logo hover-link" />
      </Link>
      <h1 className="auth__title">Добро пожаловать!</h1>

      <form className="auth__form form">
        <label className="auth__label auth__label-name">Имя</label>
        <input
          type="text"
          id="UserName"
          name="UserName"
          className="auth__input auth__input-register"
          placeholder="Виталий"
          required=""
          minLength="2"
          maxLength="40"
        />
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
          className="auth__input auth__input-register auth__input-register_password"
          placeholder="••••••••••••••"
          required=""
          minLength="2"
          maxLength="40"
        />
        <span className="auth__error"></span>
        <button
          className="auth__submit auth__submit-register hover-button"
          type="submit"
        >
          Зарегистрироваться
        </button>
        <p className="auth__subtitle auth__subtitle-register">
          Уже зарегистрированы?{" "}
          <Link to="/signin" className="auth__subtitle-link hover-link">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

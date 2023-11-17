import "./Login.css";
import logo from "../../images/headerLogo.svg";
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/validation";
import { emailRegex } from "../../utils/constants";

export default function Login({
  onLogin, isSucess, isSend,
}) {
  const { value, errors, isInputValue, handleChange, isValid } = useFormValidation();



  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(value.email, value.password);
  }



  return (
    <section className="auth">
      <Link to="/" className="auth__logo-link">
        <img src={logo} alt="логотип" className="auth__logo hover-link" />
      </Link>
      <h1 className="auth__title auth__title-login">Рады видеть!</h1>

      <form className="auth__form form" isValid noValidate onSubmit={handleSubmit}>
        <label className="auth__label auth__label-email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          pattern={emailRegex}
          className={`auth__input auth__input-register ${isInputValue.password === undefined|| isInputValue.password ? '' : 'auth__input_invalid'}`}
          placeholder="Введите email"
          value={value.email || ""}
          onChange={handleChange}
        />
        <span className="auth__error auth__error-login">{errors.email}</span>
        <label className="auth__label auth__label-password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          minLength="2"
          maxLength="30"
          className={`auth__input auth__input-register ${isInputValue.password === undefined|| isInputValue.password ? '' : 'auth__input_invalid'}`}
          placeholder="Введите пароль"
          required={true}
          value={value.password || ""}
          onChange={handleChange}
        />
        <span className="auth__error auth__error-password">{errors.password}</span>
        <button
          className={`auth__submit auth__submit-login hover-button ${isValid ? '' : 'auth__button_disabled'}`} type="submit" disabled={!isValid || isSend} onClick={handleSubmit}
        >
          Войти
        </button>
        <p className="auth__subtitle auth__subtitle-login hover-button">
          Ещё не зарегистрированы?{" "}
          <Link to="/signup" className="auth__subtitle-link hover-link">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}








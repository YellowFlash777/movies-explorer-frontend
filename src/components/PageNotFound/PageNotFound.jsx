import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="not-found">
      <section className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <button
          className="not-found__button hover__button"
          type="button"
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
      </section>
    </main>
  );
}

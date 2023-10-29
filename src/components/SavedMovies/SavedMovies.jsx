import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
export default function SavedMovies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCard />
      <Footer />
    </>
  );
}

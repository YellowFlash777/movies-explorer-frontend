import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCard from "./MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
export default function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCard />
      <Footer />
    </>
  );
}

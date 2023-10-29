import "./Main.css";
import Header from "../Header/Header";
import AboutProject from "./AboutProject/AboutProject.jsx";
import Techs from "./Techs/Techs.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import Promo from "./Promo/Promo.jsx";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <>
      <Header />
      <main className="content">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

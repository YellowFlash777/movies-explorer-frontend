import "./Main.css";
import Header from "../Header/Header";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Promo from "./Promo/Promo";
import Footer from "../Footer/Footer";

export default function Main({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
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

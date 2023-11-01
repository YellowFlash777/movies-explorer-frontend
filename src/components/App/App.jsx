import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import "./App.css";
import Main from "../Main/Main.jsx";
import PageNotFound from "../PageNotFound/PageNotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  const [currentUser, setCurrentUser] = useState();
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;

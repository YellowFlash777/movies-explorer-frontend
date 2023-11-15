import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound"
import Profile from "../Profile/Profile";
import mainApi from "../../utils/MainApi";
import { useEffect, useState } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import ErrorContext from "../../context/ErrorContext"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


 function App() {
  const navigate = useNavigate();
  const userMessage = 2500;
  const [currentUser, setCurrentUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipSuccess, setInfoTooltipSuccess] = useState("");
  const [isError, setIsError] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isEditProfile, setEditProfile] = useState(false);
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([
        mainApi.getUserData(localStorage.jwt),
        mainApi.getMovies(localStorage.jwt),
      ])
        .then(([dataUser, dataMovies]) => {
          setSavedMovies(dataMovies.reverse());
          setCurrentUser(dataUser);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.error(`Ошибка загрузки начальных данных ${err}`);
          localStorage.clear();
        });
    } else {
      setLoggedIn(false);
      localStorage.clear();
    }
  }, [loggedIn]);


  function editUserData(name, email) {
    mainApi
      .setUserInfo(name, email, localStorage.jwt)
      .then(res => {
        setCurrentUser(res);
        setInfoTooltipSuccess("Успешно")
        setEditProfile(false)
      })
      .catch((err) => {
        console.error(`Ошибка при редактировании данных пользователя ${err}`);
        setInfoTooltipSuccess(
          "Пользователь с таким email уже зарегестрирован. Повторите попытку"
        );
      })
      .finally(() => {
        console.log("Имя изменено");
      });
    }
    setTimeout(() => {
      setInfoTooltipSuccess('')
    },  userMessage);

  function handleMovieDelete(deleteMovieId) {

    mainApi
      .deleteMovie(deleteMovieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie._id !== deleteMovieId;
          })
        );
      })
      .catch((err) => console.error(`Ошибка при удалении фильма ${err}`));
  }

  function handleLikeMovie(data) {
    const isMovieLiked = savedMovies.some((movie) => movie.movieId === data.id);

    if (isMovieLiked) {
      const clickedMovie = savedMovies.find(
        (movie) => movie.movieId === data.id
      );
      if (clickedMovie) {
        handleMovieDelete(clickedMovie._id);
      }
    } else {
      mainApi
        .addMovie(data, localStorage.jwt)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => console.error(`Ошибка при установке лайка ${err}`));
    }
  }

  function handleRegister(name, email, password) {
    setIsSend(true);
    mainApi.register(name, email, password)
      .then(res => {
        if (res) {
          mainApi.login(email, password).then(res => {
            localStorage.setItem("jwt", res.token);
            setLoggedIn(true);
            navigate("/movies");
          });
        }
      })
      .catch(err => {
        console.error(`Ошибка регистрации ${err}`);
        setInfoTooltipSuccess("Данный email уже зарегестрирован");
      })
      .finally(() => setIsSend(false));

    }

  function handleLogin(email, password) {
    setIsSend(true);
    mainApi.login(email, password)
      .then(res => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true)
        navigate("/movies")
      })
      .catch(err => {
        console.error(`Ошибка авторизации ${err}`);
        setInfoTooltipSuccess("Неверный пароль или логин");
      })
      .finally(() => setIsSend(false));
    }

  useEffect(() => {
    if (localStorage.jwt) {
      mainApi.checkUserToken(localStorage.jwt)
        .then(res => {
          setLoggedIn(true);
        })
        .catch(err =>
          console.log(`Ошибка авторизации при повторном входе ${err}`))
    }
  }, [navigate]);


  function logout() {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  }




  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ErrorContext.Provider value={isError}>

        <Routes>

          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="*" element={<PageNotFound />} />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                component={Movies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                setIsError={setIsError}
                addMovie={handleLikeMovie}
                name="movies"
              />
            }
          />

          <Route path="/signup"
          element={ loggedIn ? <Navigate to="/movies" replace />
          : <Register onRegister = {handleRegister}
          isSucess={isInfoTooltipSuccess}
          isSend={isSend}
          />
        }
          />

          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) :
              (
                <Login
                  onLogin={handleLogin}
                  isSucess={isInfoTooltipSuccess}
                  isSend={isSend}
                />
              )
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                component={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                setIsError={setIsError}
                delMovie={handleMovieDelete}
                name="saved-movies"
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                component={Profile}
                loggedIn={loggedIn}
                logout={logout}
                editUserData={editUserData}
                isEditProfile={isEditProfile}
                setEditProfile={setEditProfile}
                isSucess={isInfoTooltipSuccess}
              />
            }
          />
        </Routes>
      </ErrorContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Films from "./Films";

const App = () => {
  console.log(process.env);
  const [film, setFilms] = useState([]);
  const [filmChercher, setFilmChercher] = useState("");
  const listeFilms = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_AUTHORIZATION_API,
      },
    };
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=fr-FR",
      options
    );
    const data = await response.json();
    setFilms(data.results);
    console.log(data.results);
  };

  const rechercheFilms = async (title) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_AUTHORIZATION_API,
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        title +
        "&include_adult=false&language=fr-FR&page=1",
      options
    );
    const data = await response.json();
    console.log(data);
    setFilms(data.results);
  };

  useEffect(() => {
    listeFilms();
  }, []);
  return (
    <div className="app">
      <h1>NebulixPrime</h1>
      <div className="search">
        <input
          placeholder="Entrer un nom de film"
          value={filmChercher}
          onChange={(e) => setFilmChercher(e.target.value)}
          onInput={() => rechercheFilms(filmChercher)}
        />
      </div>
      {film?.length > 0 ? (
        <div className="container">
          {film.map((film) => (
            <Films film={film} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Il n'y a aucun films</h2>
        </div>
      )}
    </div>
  );
};

export default App;

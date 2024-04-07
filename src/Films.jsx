import React from "react";

const lesFilms = ({ film }) => {
  return (
    <div id={film.id} className="movie">
      <div>
        <p>{film.release_date.split("-")[0]}</p>
      </div>
      <div>
        <img
          src={
            film.poster_path === null
              ? "https://via.placeholder.com/400"
              : "https://image.tmdb.org/t/p/w500" + film.poster_path
          }
          alt={film.title}
        />
      </div>
      <div>
        <span>{film.media_type}</span>
        <h3>{film.title}</h3>
      </div>
    </div>
  );
};

export default lesFilms;

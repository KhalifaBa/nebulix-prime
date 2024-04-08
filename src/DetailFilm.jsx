import React from "react";

const DetailFilm = ({ film }) => {
  return (
    <div className="detail">
      <div className="poster">
        <div key={film.id} onclick="" className="movie">
          <div></div>
          <div>
            <img
              src={
                film.poster_path === null
                  ? "https://via.placeholder.com/400"
                  : "https://image.tmdb.org/t/p/original" + film.poster_path
              }
              alt={film.title}
            />
          </div>
        </div>
        <div>
          <h1> {film.title}</h1>
        </div>
        <div>
          <h2> Notes : {Math.round(film.vote_average * 10) / 10} / 10</h2>
        </div>
        <div>
          <h2>Date de sortie : {film.release_date}</h2>
        </div>
        <div>
          <h2>
            Genre :
            {film.genres?.length > 0
              ? film.genres.map((genre) => " " + genre.name + " ")
              : " Aucun genre"}
          </h2>
        </div>
        <div>
          <h2>
            Vue d'ensemble du film : <p>{film.overview}</p>
          </h2>
        </div>
        <div>
          <h2>Durée du films : {Math.round(film.runtime)} minutes</h2>
        </div>
      </div>
    </div>
  );
};

export default DetailFilm;

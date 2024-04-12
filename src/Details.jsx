import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailFilm from "./DetailFilm";
import "./output.css";
const notesBackgroundColor = (film) => {
  if (film.vote_average >= 7) {
    return (document.querySelector(".notes").style.backgroundColor = "green");
  } else if (film.vote_average >= 4) {
    return (document.querySelector(".notes").style.backgroundColor = "orange");
  } else {
    return (document.querySelector(".notes").style.backgroundColor = "red");
  }
};
export const Details = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const detailFilm = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_AUTHORIZATION_API,
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=fr-FR",
      options
    );
    const data = await response.json();
    console.log(data);
    setDetail(data);
  };

  useEffect(() => {
    detailFilm();
    notesBackgroundColor(detail);
  }, [detail]);

  return (
    <div className="">
      <DetailFilm film={detail} />
    </div>
  );
};

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailFilm from "./DetailFilm";

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
  }, []);
  return (
    <div className="">
      <div>
        <a href="/">Retourner à l'accueil</a>
      </div>
      <DetailFilm film={detail} />
    </div>
  );
};

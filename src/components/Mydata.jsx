import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Cards from "./Cards";

const Mydata = () => {
  let dataDoc = {};

  // const urlepisode = `https://api.tvmaze.com/shows/210/episodes?embed[]=episodes&embed[]=cast?embed[]=seasons`;
  const urlepisode = `https://api.tvmaze.com/shows/210?embed[]=cast&embed[]=seasons&embed[]=episodes`;

  const [url, setUrl] = useState(urlepisode);

  const { isLoading, isError, data } = useFetch(url);
  // shu ru urlCountries  urlStates urlCites, ran hou jiu ke yi zai console li mian kan jian data

  if (data) {
    dataDoc = {
      seasons: data._embedded.seasons,
      episodes: data._embedded.episodes,
      cast: data._embedded.cast,
    };
  }

  return (
    <>
      {isLoading && <p>Chargement...</p>}
      {isError && <p>une erreur est survenue...</p>}
      {data && <Cards seasons={dataDoc.seasons} episodes={dataDoc.episodes} casts={dataDoc.cast}/>}
    </>
  );
};

export default Mydata;

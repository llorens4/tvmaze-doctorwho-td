import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Cards from "./Cards";

const Mydata = () => {
  let dataDoc = {};

  const urlepisode = `https://api.tvmaze.com/shows/210/episodes?embed[]=episodes&embed[]=cast`;

  const [url, setUrl] = useState(urlepisode);

  const { isLoading, isError, data } = useFetch(url);
  // shu ru urlCountries  urlStates urlCites, ran hou jiu ke yi zai console li mian kan jian data

  if (data) {
    dataDoc = {
      img: data[0].image.medium,
      summary: data.summary,
    };
  }

  return (
    <>
      {isLoading && <p>Chargement...</p>}
      {isError && <p>une erreur est survenue...</p>}
      {data && <Cards data={data} />} 
    </>
  );
};

export default Mydata;

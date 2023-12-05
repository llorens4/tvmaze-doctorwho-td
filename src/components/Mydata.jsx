import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Cards from "./Cards";

const Mydata = () => {
  let dataDoc = {};

  // const urlepisode = `https://api.tvmaze.com/shows/210/episodes?embed[]=episodes&embed[]=cast?embed[]=seasons`;
  //const urlepisode = `https://api.tvmaze.com/shows/210?embed[]=cast&embed[]=seasons&embed[]=episodes`
    //const urlimage = `https://api.tvmaze.com/shows/210/images`;
  const urlepisode = `https://api.tvmaze.com/shows/210?embed[]=cast&embed[]=seasons&embed[]=episodes&embed[]=images`;
  const [url, setUrl] = useState(urlepisode);
 // const [url2, setUrl2] = useState(urlimage);


  const { isLoading, isError, data } = useFetch(url);
 //  const { isLoading2, isError2, data2 } = useFetch(url2);

  // shu ru urlCountries  urlStates urlCites, ran hou jiu ke yi zai console li mian kan jian data

  if (data) {
    dataDoc = {
      seasons: data._embedded.seasons,
      episodes: data._embedded.episodes,
      cast: data._embedded.cast,
      affiches:data._embedded.images
    };

   
  }

   //if (data2) {
   //   dataimg = {
   //     idimage: data.id,
     //   url: data._resolution.original.url,
     // };
   // }



  return (
    <>
      {isLoading && <p>Chargement...</p>}
      {isError && <p>une erreur est survenue...</p>}
      {data && <Cards seasons={dataDoc.seasons} episodes={dataDoc.episodes} casts={dataDoc.cast} affiches={dataDoc.affiches}/>}
    </>
    
  );
};

export default Mydata;

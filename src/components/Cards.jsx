import EpisodeCard from "./EpisodeCard";

import { useState } from "react";

export default function Cards({ seasons, episodes }) {
 
  
  // seasons est un tableau contenant toutes les saisons
  // episodes est un tableau contenant tous les épisodes

  // La saison séléctionnée
  const [saison, setSaison] = useState(1)


  // episodes est un tableau contenant tous les épisodes d'une saison
  const episodesSaison = episodes.filter((episode) => episode.season == saison);


  // Pour changer de saison
  const handlerClick = (e) => {
    e.preventDefault()
    setSaison(e.target.dataset.saison)
  }


  return (
    <>
      <div className="">
        <h1 className=" ml-10 text-2xl font-semibold text-white ">Episode</h1>

        <ul className=" ml-10 mt-10 text-lg font-medium text-white grid-cols-13 grid-flow-col grid grid-rows-1 ">
          {seasons.map((saison,i)=> <li key = {saison.id}><button data-saison = {i+1} onClick={handlerClick} >{saison.number}</button></li>)}
        </ul>

   

        <div className="flex flex-wrap">
          {episodesSaison.map((episode) => (
            <EpisodeCard data={episode} id={episode.id} />
          ))}
        </div>
      </div>
    </>
  );
}

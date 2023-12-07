
import EpisodeCard from "./EpisodeCard";
import Cast from "./Cast";
import Gallery_card from './Gallery_card';

import { useState } from "react";

export default function Cards({ seasons, episodes, casts, affiches} ) {


  // seasons est un tableau contenant toutes les saisons
  // episodes est un tableau contenant tous les épisodes

  // La saison séléctionnée
  const [saison, setSaison] = useState(1);
   



  // episodes est un tableau contenant tous les épisodes d'une saison

  const episodesSaison = episodes.filter((episode) => episode.season == saison);



  // Pour changer de saison
  const handlerClick = (e) => {
    e.preventDefault()
    setSaison(e.target.dataset.saison)
  }
  return (
    <>
      
        <h3 className=" ml-10 text-4xl font-CCtimelord text-white py-8">
          Episode
        </h3>

        <ul className=" text-2xl text-white flex flex-wrap justify-center ">
          {seasons.map((saison, i) => (
            <li key={saison.id}>
              <button
                data-saison={i + 1}
                onClick={handlerClick}
                className="mx-4 py-2 transition-all duration-500 text-white hover:text-gold border-b-gold"
              >
                Saison {saison.number}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap justify-center">
          {episodesSaison.map((episode) => (
            <EpisodeCard data={episode} id={episode.id} />
          ))}
        </div>
  

     
        <h3 className=" ml-10 text-4xl font-CCtimelord text-white py-8">
          Casts
        </h3>

        <div className="flex overflow-x-scroll snap-mandatory scrollbar">
          {casts.map((cast) => (
            <Cast data={cast} />
          ))}
        </div>
   

    
        <h3 className=" ml-10 text-4xl font-CCtimelord text-white py-8">
          Gallery
        </h3>
        <div className=" flex overflow-x-scroll snap-mandatory scrollbar">
          {affiches.map((affiche) => (
            <Gallery_card data={affiche} />
          ))}
        </div>
   
    </>
  );
}

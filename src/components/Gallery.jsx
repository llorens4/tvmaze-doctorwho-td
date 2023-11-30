import { useState } from "react";

export default function Cards({ url, idimage }) {
  // seasons est un tableau contenant toutes les saisons
  // episodes est un tableau contenant tous les épisodes

  // La saison séléctionnée

  // episodes est un tableau contenant tous les épisodes d'une saison

  // Pour changer de saison
  return (
    <>
      <div className="">
        <h3 className=" ml-10 text-4xl font-CCtimelord text-white py-8">
          Gallery
        </h3>

        <ul className=" text-2xl text-white flex flex-wrap justify-center ">
          {url.map((idimage, i) => (
            <li key={idimage.id}>
              <img src={url} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

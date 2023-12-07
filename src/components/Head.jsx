import React, { useState } from "react";


export default function Head() {
  return (
    <>
      <img
        src="/doctorwho-logo-2022.webp"
        alt="logo doctor who"
        className="max-w-[15rem] ml-2"
      />
      <div className="text-2xl">
        <button
          className="m-4 transition-all duration-500 text-white hover:text-gold border-b-gold"
          // onClick={() => scrollToRef(introRef)}
        >
          Accueil
        </button>
        <button
          className="m-4 transition-all duration-500 text-white hover:text-gold border-b-gold"
          // onClick={() => scrollToRef(episodeRef)}
        >
          Episode
        </button>
        <button
          className="m-4 transition-all duration-500 text-white hover:text-gold border-b-gold"
          // onClick={() => scrollToRef(castRef)}
        >
          Cast
        </button>
        <button
          className="m-4 transition-all duration-500 text-white hover:text-gold border-b-gold"
          // onClick={() => scrollToRef(galleryRef)}
        >
          Gallery
        </button>
      </div>
    </>
  );
}

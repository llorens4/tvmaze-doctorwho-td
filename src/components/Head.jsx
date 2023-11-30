import React, { useState } from "react";

export default function Head() {

  return (
    <>
      <img
        src="/doctorwho-logo-2022.webp"
        alt="logo doctor who"
        className="max-w-[15rem]"
      />
      <div className="">
        <button>Accueil</button>
        <button>Episode</button>
        <button>Cast</button>
        <button>Gallery</button>
        <button>News</button>
      </div>
    </>
  );
}

import React, { useRef } from "react";
import Head from "./components/Head";
import Home from "./components/Home";
import Mydata from "./components/Mydata";
import Cards from "./components/Cards";

export default function App() {

  // const introRef = useRef(null);
  // const episodeRef = useRef(null);
  // const castRef = useRef(null);
  // const galleryRef = useRef(null);

  // const scrollToRef = (ref) =>
  //   window.scrollTo({
  //     top: ref.current.offsetTop,
  //     behavior: "smooth",
  //   });


  return (
    <>
      <header className="flex bg-mon-bg text-white flex-row items-center font-BBC py-2">
        <Head
          // introRef={introRef}
          // episodeRef={episodeRef}
          // castRef={castRef}
          // galleryRef={galleryRef}
          // scrollToRef={scrollToRef} // Pass scrollToRef as a prop
        />
      </header>

      <main className="flex flex-col h-min-screen w-max-screen bg-mon-bg bg-galactic font-BBC text-white">
        <Home  />
        <Cards
       
        />
        <Mydata />
      </main>
    </>
  );
}

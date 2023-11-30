import { useState } from "react";
import useFetch from "../hooks/useFetch";
export default function Home({ dataglb }) {

    const urlglb = `https://api.tvmaze.com/shows/72724`;
     let dataglb = {};
    //const {image, summary} = data;
    const [url, setUrl] = useFetc(urlglb);




    return (
        <>
        <img src={dataglb.image.original} alt="doctor who" />
        <p>{dataglb.summary}</p>
        </>
    )

};

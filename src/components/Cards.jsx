import EpisodeCard from "./EpisodeCard";

export default function Cards({ data }) {
  const dataSaison = data.filter((episode) => episode.season == 1);
  return (
    <>
      <div className="">
        <h1 className=" ml-10 text-2xl font-semibold text-white ">Episode</h1>
        <ul className=" ml-10 mt-10 text-lg font-medium text-white grid-cols-13 grid-flow-col grid grid-rows-1 ">
          <li>S1</li>
          <li>S2</li>
          <li>S3</li>
          <li>S4</li>
          <li>S5</li>
          <li>S6</li>
          <li>S7</li>
          <li>S8</li>
          <li>S9</li>
          <li>S10</li>
          <li>S11</li>
          <li>S12</li>
          <li>S13</li>
        </ul>
        <div className="flex flex-wrap">
          {dataSaison.map((episode) => (
            <EpisodeCard data={episode} id={episode.id} />
          ))}
        </div>
      </div>
    </>
  );
}

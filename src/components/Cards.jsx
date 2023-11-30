import EpisodeCard from "./EpisodeCard";

export default function Cards({ data }) {
  const dataSaison = data.filter((episode) => episode.season == 1);
  return (
    <>
      <div className="">
        <h1 className=" ml-10 text-2xl font-semibold text-white ">Episode</h1>
        <div className="grid-cols-4 grid-flow-col grid grid-rows-2">
          {dataSaison.map((episode) => (
            <EpisodeCard data={episode} id={episode.id} />
          ))}
        </div>
      </div>
    </>
  );
}

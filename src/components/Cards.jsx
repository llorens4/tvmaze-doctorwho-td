import EpisodeCard from "./EpisodeCard";

export default function Cards({ data }) {
  const dataSaison = data.filter((episode) =>  episode.season==1)
  return (
    <>
      <div className="">
        {dataSaison.map(episode => <EpisodeCard data={episode} id={episode.id} />)}

      </div>
    </>
  );
}

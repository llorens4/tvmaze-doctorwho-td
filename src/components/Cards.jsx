import Card from "./Card"

export default function Cards({ data }) {
  const dataSaison = data.filter((episode) =>  episode.season==1)
  return (
    <>
      <div className="">
        {dataSaison.map(episode => <Card data={episode} id={episode.id} />)}

      </div>
    </>
  );
}

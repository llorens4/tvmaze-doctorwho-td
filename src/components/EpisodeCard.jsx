export default function EpisodeCard({ data }) {
  const { image,summary,id,name} = data;
  return (

      <div className="flex flex-col max-w-[20rem] pb-5 h-auto  bg-vortex-texture m-5 text-white text-center justify-center " key={name}>
        <img className="justify-center" src={image.medium} alt={name} />
        <h1 className="mt-3 text-lg font-semibold">{name}</h1>
        <h1 className="mt-2 text-sm mb-2">{summary}</h1>
      </div>

  );
}

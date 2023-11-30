export default function Cast({ data }) {
  const { person, character } = data;

  const src = (character.image)?character.image.medium:person.image.medium

  return (
    <>
      <div
        className="flex flex-col max-w-[20rem] pb-5 h-auto  bg-vortex-texture m-5 text-white text-center justify-center "
        key={person.name}
      >
  
        <img className="justify-center" src={src} alt={person.name} />
        <h1 className="mt-3 text-lg font-semibold">{person.name}</h1>
       <h1 className="mt-2 text-sm mb-2">{character.name}</h1>
   
      </div>
    </>
  );
}

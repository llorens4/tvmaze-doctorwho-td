export default function Cast({ data }) {
  const { person, character } = data;

  const src = (character.image)?character.image.medium:person.image.medium

  return (
    <>
      <div
        className="flex flex-col p-5 pb-5  bg-vortex-texture m-5 text-white text-center justify-center "
        key={person.name}
      >
  
        <img className="justify-center" src={src} alt={person.name} />
        <h1 className="mt-3 w-48 text-lg font-semibold">{person.name}</h1>
       <h1 className="mt-2 text-sm mb-2">{character.name}</h1>
   
      </div>
    </>
  );
}

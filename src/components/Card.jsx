export default function Card({ data }) {
  const { image,summary,id,name} = data;
  return (

      <div className=" w-44 p-2 h-auto bg-img m-10 text-red-50" key={name}>
        <img src={image.medium} alt={name} />
        <h1 className="mt-2 text-lg font-semibold">{name}</h1>
        <h1 className="mt-2  text-sm mb-2">{summary}</h1>
      </div>

  );
}

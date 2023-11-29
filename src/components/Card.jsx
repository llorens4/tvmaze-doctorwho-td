export default function Card({ data }) {
  const { image,summary,id,name} = data;
  return (

      <div className=" w-44 p-2 h-screen" key={name}>
        <img src={image.medium} alt={name} />
        <h1>{summary}</h1>
      </div>

  );
}

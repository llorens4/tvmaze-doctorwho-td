export default function Gallery_card({ data }) {
  const { resolutions } = data;
  const src = resolutions.original.url
  return (
    <>

    

    <div  className="flex shrink-0 flex-col max-w-[20rem] pb-5 h-auto  bg-vortex-texture m-5 text-white text-center justify-center "
        >

        <img className="justify-center w-48" src={src}  />

      </div>
    </>
  );
}

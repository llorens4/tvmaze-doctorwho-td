export default function Home() {
  return (
    <>
      <section className="m-10 flex flex-col justify-center text-center items-center">
        <img
          src="https://static.tvmaze.com/uploads/images/original_untouched/486/1217372.jpg"
          alt="logo doctor who"
          className="justify-center px-6 py-6 aspect-auto"
        />
        <h1 className="font-CCtimelord text-6xl pt-12 pb-4">Doctor Who</h1>

        <div>
          <h1 className="flex text-xl ">
            The Doctor and friends travel from the dawn of human history to
            distant alien worlds. And everywhere they go, they find adventure,
            terror, fun, chases, joy and monsters.
          </h1>
        </div>
      </section>
    </>
  );
}

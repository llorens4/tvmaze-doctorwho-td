import Head from "./components/Head";
import Home from "./components/Home";
import Gallery from "./components/Gallery";

import Mydata from "./components/Mydata";
export default function App() {
  return (
    <>
      <header className="flex bg-mon-bg text-white flex-row items-center font-BBC py-2">
        <Head />
      </header>

      <main className="flex flex-col h-min-screen w-max-screen bg-mon-bg bg-galactic font-BBC text-white">
        <Home />
        <Mydata />

      </main>
    </>
  );
}

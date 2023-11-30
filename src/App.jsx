import Head from "./components/Head";


import Mydata from "./components/Mydata";
export default function App() {
  return (
    <>
      <header className="flex bg-mon-bg text-white flex-row items-center font-BBC">
        <Head />
      </header>
      <main className="h-min-screen w-max-screen bg-mon-bg bg-star-pattern font-CCtimelord">
        <p>hello</p>
        <Mydata />
      </main>
      <footer>
        <p> hello</p>
      </footer>
    </>
  );
}

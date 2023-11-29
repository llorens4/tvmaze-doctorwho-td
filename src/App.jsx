import Head from "./components/Head";


import Mydata from "./components/Mydata";
export default function App() {
  return (
    <>
      <header className="flex bg-red-400">
        <Head />
      </header>
      <main className="h-min-screen w-screen bg-mon-bg bg-star-pattern">
        <p>hello</p>
        <Mydata />
      </main>
      <footer>
        <p> hello</p>
      </footer>
    </>
  );
}

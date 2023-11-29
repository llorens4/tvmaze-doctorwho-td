import Head from "./components/Head";

import Mydata from "./components/Mydata";
export default function App() {
  return (
    <>
      <header className="">
        <Head />
      </header>
      <main className="h-min-screen bg-mo bg-star-pattern">
        <p>hello</p>
        <Mydata/>

      </main>
      <footer>
        <p> hello</p>
      </footer>
    </>
  );
}

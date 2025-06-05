import { useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import "./index.css";
import Contact from "./Components/Contact";
import Industries from "./Components/industries";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <About />
      <Service />
      <Industries />
      <Contact />
    </>
  );
}

export default App;

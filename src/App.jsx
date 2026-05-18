import { useState } from "react";

import "./App.css";
import "@fontsource/bebas-neue";
import Header from "./components/Header/Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <Header />
      </div>
    </>
  );
}

export default App;

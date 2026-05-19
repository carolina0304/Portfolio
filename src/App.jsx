import "./App.css";
import "@fontsource/bebas-neue";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Main/Hero.jsx";
import Projects from "./components/Main/Projects.jsx";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Hero />
        <Projects />
      </div>
    </>
  );
}

export default App;

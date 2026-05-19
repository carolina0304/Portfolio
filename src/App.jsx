import "./App.css";
import "@fontsource/bebas-neue";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Main/Hero.jsx";
import Projects from "./components/Main/Projects.jsx";
import Aboutme from "./components/Main/Aboutme.jsx";
import Contact from "./components/Main/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Hero />
        <Projects />
        <Aboutme />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

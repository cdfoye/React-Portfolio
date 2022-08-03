import { useContext } from "react";
import { darkMode } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Portfolio from "./components/Projects/Projects";
import Resume from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  const [{ darkMode }] = useContext(darkMode);

  return (
    <div id="top" className={`${darkMode} app`}>
      <Header />

      <main>
        <About />
        <Portfolio />
        <Contact />
        <Resume />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;

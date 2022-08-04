import { useContext } from "react";
import { darkMode } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import "./App.css";

const App = () => {
  const [{ themeName }] = useContext(darkMode);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;

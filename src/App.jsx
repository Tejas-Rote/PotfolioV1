import { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/index.js";
import { Header, Skills, Footer, MyProject } from "./containers/index.js";

const App = () => {
  useEffect(() => {
    const isMobile = () => {
      return window.innerWidth < 768; // Adjust the breakpoint as needed
    };

    const handleViewportChange = () => {
      if (isMobile()) {
        document.documentElement.classList.remove("desktop-mode");
      } else {
        document.documentElement.classList.add("desktop-mode");
      }
    };

    handleViewportChange(); // Run initially to set the correct mode

    window.addEventListener("resize", handleViewportChange);

    return () => {
      window.removeEventListener("resize", handleViewportChange);
    };
  }, []);

  return (
    <div className="app">
      <div className="bg">
        <Navbar />
        <Header />
        <Skills />

        <MyProject />

        <Footer />
      </div>
    </div>
  );
};

export default App;

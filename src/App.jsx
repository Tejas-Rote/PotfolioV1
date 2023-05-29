import "./App.css";
import { Navbar } from "./components/index.js";
import { Header, Skills, Footer, MyProject } from "./containers/index.js";

const App = () => {
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

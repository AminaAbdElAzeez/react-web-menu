import "./App.css";
import About from "./components/About/About";
import Branches from "./components/Branches/Branches";
import Contact from "./components/Contact/Contact";
import Dawnload from "./components/Dawnload/Dawnload";
import Kinds from "./components/Kinds/Kinds";
import Menus from "./components/Menus/Menus";
import Pocket from "./components/Pocket/Pocket";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Dawnload />
      <Kinds />
      <About />
      <Menus />
      <Services />
      <Branches />
      <Contact />
      <Pocket />
    </div>
  );
}

export default App;

import "./App.css";
import About from "./components/About/About";
import Branches from "./components/Branches/Branches";
import Contact from "./components/Contact/Contact";
import Dawnload from "./components/Dawnload/Dawnload";
import Footer from "./components/Footer/Footer";
import Kinds from "./components/Kinds/Kinds";
import Menus from "./components/Menus/Menus";
import Navbar from "./components/Navbar/Navbar";
import Pocket from "./components/Pocket/Pocket";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dawnload />
      <Kinds />
      <About />
      <Menus />
      <Services />
      {/*<Branches />*/}
      <Contact />
      <Pocket />
      <Footer />
    </div>
  );
}

export default App;

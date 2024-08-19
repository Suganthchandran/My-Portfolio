import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Skill } from "./components/Skill";
import { Work } from "./components/Work";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Skill/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

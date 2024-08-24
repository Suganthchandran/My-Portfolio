import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Skill } from "./components/Skill";
import { Work } from "./components/Work";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Skill />
        <Work />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

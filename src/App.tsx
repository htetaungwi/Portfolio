import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./Pages/Header";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import About from "./Pages/About";
import Home from "./Pages/Home";
function App() {

  return (
   
    <Router basename="/Portfolio/">
      
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
      </Router>
    
  );
}

export default App

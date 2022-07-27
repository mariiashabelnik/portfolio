import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Experiance from "./pages/Experiance";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="experiance" element={<Experiance />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

//import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ExperianceDetail from "./pages/ExperienceDetail";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="text-white">
      <RecoilRoot>
        <main className=" min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience/:id" element={<ExperianceDetail />} />
          </Routes>
          <Footer />
        </main>
      </RecoilRoot>
    </div>
  );
}

export default App;

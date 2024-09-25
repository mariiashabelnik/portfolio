//import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ExperianceDetail from "./pages/ExperienceDetail";
import FullPage from "./pages/FullPage";
import { RecoilRoot } from "recoil";
import ScrollToAnchor from "./components/ScrollToAnchor";

function App() {
  return (
    <div className=" text-gray-600 ">
      <RecoilRoot>
        <main className=" min-h-screen">
          <Header />
          <ScrollToAnchor />
          <Routes>
            <Route path="/" element={<FullPage />} />
            {/* <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />*/}
            <Route path="/experience/:id" element={<ExperianceDetail />} />
          </Routes>
          <Footer />
        </main>
      </RecoilRoot>
    </div>
  );
}

export default App;

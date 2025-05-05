import About from "./About";
import Footer from "../components/Footer";
import Experiance from "./Experience";
import Start from "./Start";

function FullPage() {
  return (
    <div className="container mx-auto px-10 max-w-6xl">
      <Start />
      <About />
      <Experiance />
      <Footer />
    </div>
  );
}

export default FullPage;

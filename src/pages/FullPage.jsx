import About from "./About";
import Contact from "./Contact";
import Experiance from "./Experience";
import Start from "./Start";

function FullPage() {
  return (
    <div className="container mx-auto px-2">
      <Start />
      <About />
      <Experiance />
      <Contact />
    </div>
  );
}

export default FullPage;

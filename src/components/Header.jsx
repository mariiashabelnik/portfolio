import { Link, useLocation } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const menuTimeout = 400;
  const location = useLocation();

  const menu = [
    { link: "/", title: ".me()" },
    { link: "/experience", title: ".experience()" },
    { link: "/contact", title: ".contact()" },
  ];
  //ist'llet Contact -> CV, kontakt kan vara i footer p[ alla sidor]

  const menuUI = menu.map((item) => {
    let className = "drop-shadow-light hover:drop-shadow-doublelight";
    if (location.pathname === item.link) {
      className += " text-white";
    } else {
      className += " text-white/40";
    }
    return (
      <li key={item.link}>
        <Link className={className} to={item.link}>
          {item.title}
        </Link>
      </li>
    );
  });

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm	 bg-bgColor/90 ">
      <div className="container mx-auto">
        <nav className="flex items-center mx-4 py-4">
          <div className="flex-none text-4xl font-black">
            <Link
              className=" drop-shadow-doublelight hover:drop-shadow-light"
              to="/"
            >
              MS.
            </Link>
          </div>
          {/* <div className="hamburger">
            <Hamburger color="#e5e5ff" toggled={isOpen} toggle={setOpen} />
          </div> */}
          <div className="grow"></div>
          <div className="flex-none  ">
            <ul className="flex flex-row gap-4 text-lg">{menuUI}</ul>
          </div>
        </nav>

        {isOpen && hamburgerMenu}
      </div>
    </header>
  );
}

export default Header;

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Divide as Hamburger } from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);

  const menuTimeout = 400;
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const menu = [
    { link: "/#about", title: ".me()" },
    { link: "/#experience", title: ".experience()" },
    { link: "/#contact", title: ".contact()" },
  ];

  const menuUI = menu.map((item) => {
    let className = "drop-shadow-light hover:drop-shadow-doublelight";
    if (location.pathname === item.link) {
      className += " text-white";
    } else {
      className += " text-white/40";
    }
    return (
      <li className="my-10 text-xl md:my-0 md:text-base" key={item.link}>
        <Link
          className={className}
          onClick={() => {
            setOpen(false);
          }}
          to={item.link}
        >
          {item.title}
        </Link>
      </li>
    );
  });

  const headerClasses = ["sticky", "top-0", "z-40", "backdrop-blur-md", "h-16"];
  const logoClasses = ["hover:drop-shadow-light"];
  const overlayMenu = [
    "bg-black/90",
    "z-50",
    "fixed",
    "left-0",
    "right-0",
    "top-16",
    "h-screen",
    "backdrop-blur-sm",
    "p-2",
  ];
  if (isOpen) {
    headerClasses.push("bg-black/90");
    logoClasses.push("drop-shadow-yellow");
  } else {
    headerClasses.push("bg-bgColor/90");
    logoClasses.push("drop-shadow-doublelight");
  }

  return (
    <>
      {isOpen && (
        <div className={overlayMenu.join(" ")}>
          <div className=" h-[calc(100vh-20rem)]  flex flex-col justify-center">
            <ul>{menuUI}</ul>
          </div>
        </div>
      )}
      <header className={headerClasses.join(" ")}>
        <div className="container mx-auto h-full">
          <nav className="flex items-center h-full px-2">
            <div className="flex-none text-3xl md:text-4xl font-black font-headline ">
              <Link className={logoClasses.join(" ")} to="/#start">
                MW.
              </Link>
            </div>

            <div className="grow"></div>
            <div className="flex-none hidden md:block ">
              <ul className="flex flex-row gap-4 text-lg">{menuUI}</ul>
            </div>
            <div className="flex-none block md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} duration={0.9} />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

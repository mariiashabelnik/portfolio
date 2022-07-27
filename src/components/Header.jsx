import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const menuTimeout = 400;

  const hamburgerMenu = (
    <div className="hamburger-menu">
      <div>
        <Link
          onClick={() => {
            setTimeout(() => {
              setOpen(false);
            }, menuTimeout);
          }}
          to="/"
        >
          .me()
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            setTimeout(() => {
              setOpen(false);
            }, menuTimeout);
          }}
          to="/experience"
        >
          .experience()
        </Link>
      </div>
      <div>
        <Link
          onClick={() => {
            setTimeout(() => {
              setOpen(false);
            }, menuTimeout);
          }}
          to="/contact"
        >
          .contact()
        </Link>
      </div>
    </div>
  );

  return (
    <div className="nav">
      <div className="container">
        <div className=" nav-items">
          <div className="logo">
            <Link to="/">MS.</Link>
          </div>
          <div className="hamburger">
            <Hamburger color="#e5e5ff" toggled={isOpen} toggle={setOpen} />
          </div>

          <div className="menu-items ">
            <div>
              <Link to="/">.me()</Link>
            </div>
            <div>
              <Link to="/experience">.experience()</Link>
            </div>
            <div>
              <Link to="/contact">.contact()</Link>
            </div>
          </div>
        </div>

        {isOpen && hamburgerMenu}
      </div>
    </div>
  );
}

export default Header;

import { Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav">
      <div className="container nav-items">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <div className="menu-items">
          <div>
            <Link to="/">About</Link>
          </div>
          <div>
            <Link to="/experiance">Experiance</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

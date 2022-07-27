function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <div className="container">
      <div className="copyright">
        © {fullYear} Mariia Shabelnik, all rights reserved
      </div>
    </div>
  );
}

export default Footer;

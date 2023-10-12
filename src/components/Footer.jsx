function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <footer className="container mx-auto my-10 px-6 sticky top-[95vh]">
      <div className=" text-center text-sm text-white/50 ">
        © {fullYear} Mariia Shabelnik, all rights reserved
      </div>
    </footer>
  );
}

export default Footer;

import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const fullYear = new Date().getFullYear();
  const email = "mariia.shabelnik@gmail.com"; // Replace with your email
  const linkedinUrl = "https://www.linkedin.com/in/mariia-shabelnik/"; // Replace with your LinkedIn URL

  return (
    <footer className="container mx-auto my-10 px-6 sticky top-[95vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a
            href={`mailto:${email}`}
            className="text-gray-500 hover:text-highlight transition-colors duration-300"
            aria-label="Send email to Mariia"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-highlight transition-colors duration-300"
            aria-label="Visit Mariia's LinkedIn profile"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center text-sm text-gray-500">
          © {fullYear} Mariia Shabelnik, all rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;

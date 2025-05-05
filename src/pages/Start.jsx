import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function Start() {
  const greeting = "Hello, my name is Maria.";
  const greetingArray = greeting.split("");
  const role = "I'm a Frontend Engineer";
  const roleArray = role.split("");
  
  const controls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    // Start the second animation after the first line completes
    const timer1 = setTimeout(() => {
      controls.start("visible");
    }, greetingArray.length * 100 + 500); // Total time for first line + 500ms delay

    // Start the content animation after the second line completes
    const timer2 = setTimeout(() => {
      contentControls.start("visible");
    }, (greetingArray.length + roleArray.length) * 100 + 1000); // Total time for both lines + 1000ms delay

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative">
      <div id="start" className="absolute  -top-16 "></div>

      <div className=" min-h-screen flex items-center">
        <div className="">
          <h1 className="text-titlePhone md:text-title md:leading-tight mb-2 font-ht">
            {greetingArray.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <span className="text-highlight">.</span>
          </h1>
          <h2 className="text-subTPhone md:text-subT font-ht">
            {roleArray.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1 }
                }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <span className="text-highlight">.</span>
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={contentControls}
            variants={{
              visible: { opacity: 1 }
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <p className="text-base md:w-1/2 w-full text-left my-4 font-body">
              I'm a Stockholm-based web developer with startup experience,
              building things with JavaScript, React, and Node.js. I'm also into
              3D design and art, and my mini poodle,{" "}
              <span className="font-black">Oreo</span>{" "}
              <img
                src="/img/oreo-logo.png"
                alt="oreo_logo"
                className="inline h-"
              />{" "}
              , is always in my creative space. Let's chat!
              {/* Hi, I'm Mariia! I'm a developer who loves building functional,
              user-friendly web experiences with a creative twist. I've been
              working as a junior frontend engineer in startups, gaining hands-on
              experience. I use JavaScript, React, Node.js, and SQL, and I'm
              always exploring 3D design to add a little extra flair. Let's
              connect and maybe you'll meet my mini poodle,{" "}
              <span className="font-black">Oreo</span>{" "}
              <img
                src="/img/oreo-logo.png"
                alt="oreo_logo"
                className=" inline h-"
              />{" "}
              , who's always hanging out with me while I work! */}
              {/* "Hi, I'm Mariia! I'm a frontend developer with experience in startup projects, working with JavaScript, React, Node.js, and SQL. I love combining my technical skills with my passion for art and design, especially through 3D projects. Let's connect and see what we can create together—also, say hi to my mini poodle, Oreo, who's always by my side in my creative space!" */}
            </p>
            <div>
              <a
                href="https://www.linkedin.com/in/mariia-shabelnik/"
                target="_blank"
                className="flex items-center gap-2 hover:text-highlight transition-colors duration-300"
              >
                <img
                  src="/img/icons8-linkedin.svg"
                  alt="LinkedIn icon"
                  className="inline h-6"
                />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Start;

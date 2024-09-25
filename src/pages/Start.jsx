function Start() {
  return (
    <div className="relative">
      <div id="start" className="absolute  -top-16 "></div>

      <div className=" min-h-screen flex items-center">
        <div className="">
          <h1 className="text-titlePhone md:text-title md:leading-tight mb-2 font-ht">
            Hello, my name is Maria<span className=" text-highlight">.</span>
          </h1>
          <h2 className="text-subTPhone md:text-subT font-tags">
            I'm a<span className=" text-highlight"> Frontend Engineer</span>
          </h2>
          <p className="text-base w-1/2 text-left my-4">
            Hi, I’m Mariia! I’m a web developer with startup experience,
            building things with JavaScript, React, and Node.js. I’m also into
            3D design and art, and my mini poodle,{" "}
            <span className="font-black">Oreo</span>{" "}
            <img
              src="/img/oreo-logo.png"
              alt="oreo_logo"
              className=" inline h-"
            />{" "}
            , is always in my creative space. Let’s chat!
            {/* Hi, I’m Mariia! I’m a developer who loves building functional,
            user-friendly web experiences with a creative twist. I’ve been
            working as a junior frontend engineer in startups, gaining hands-on
            experience. I use JavaScript, React, Node.js, and SQL, and I’m
            always exploring 3D design to add a little extra flair. Let’s
            connect and maybe you’ll meet my mini poodle,{" "}
            <span className="font-black">Oreo</span>{" "}
            <img
              src="/img/oreo-logo.png"
              alt="oreo_logo"
              className=" inline h-"
            />{" "}
            , who’s always hanging out with me while I work! */}
            {/* "Hi, I’m Mariia! I’m a frontend developer with experience in startup projects, working with JavaScript, React, Node.js, and SQL. I love combining my technical skills with my passion for art and design, especially through 3D projects. Let’s connect and see what we can create together—also, say hi to my mini poodle, Oreo, who’s always by my side in my creative space!" */}
          </p>
          <div>
            <a href="https://www.linkedin.com/in/mariia-shabelnik/">
              <img
                src="/img/icons8-linkedin.svg"
                alt="oreo_logo"
                className=" inline h-"
              />
              LinkedIn
            </a>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Start;

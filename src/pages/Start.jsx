function Start() {
  return (
    <div className="relative">
      <div id="start" className="absolute  -top-16 "></div>

      <div className=" h-screen">
        <h1 className="text-titlePhone md:text-title md:leading-tight mb-2 font-headline">
          Hello, my name is Maria<span className=" text-highlight">.</span>
        </h1>
        <h2 className="text-subTPhone md:text-subT font-headline">
          I'm a<span className=" text-highlight"> Frontend Engineer</span>
        </h2>
        <p className="text-base">
          In my recent journey as a junior frontend engineer, I've gained
          valuable experience through involvement in various projects within
          startup environments. Passionate about art and design, I've developed
          my skills beyond coding. Let's connect and explore opportunities
          together! By the way, you might catch a glimpse of my black mini
          poodle, Oreo, who's an integral part of my creative space.
        </p>
      </div>
    </div>
  );
}

export default Start;

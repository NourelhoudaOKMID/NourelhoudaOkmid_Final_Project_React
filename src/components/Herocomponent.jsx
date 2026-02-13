const Herocomponent = ({ background, title }) => {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center justify-center">
      
      <img
        src={background}
        alt="hero"
        className="absolute inset-0 w-full h-full object-center object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <h1 className="relative z-10 text-white text-5xl md:text-7xl font-extrabold  text-center px-4 ">
        {title}
      </h1>

    </section>
  );
};

export default Herocomponent;

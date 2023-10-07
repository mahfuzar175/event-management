const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/7RYYcqn/event-manager-using-laptop-banquet-hall.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Welcome to our <br /><span>FestivHub</span></h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-secondary normal-case text-lg font-bold">Contact Now!!!</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

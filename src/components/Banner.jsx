import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/BPxc1ct/checklistfacil-organizacao-de-eventos.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl lg:text-5xl font-bold">
            Welcome to our <br />
            <span>FestiveHub</span>
          </h1>
          <p className="mb-5">
          Your premier event management platform, connecting you with top-notch vendors and personalized solutions for seamless and unforgettable events. Plan your perfect gathering with us!
          </p>
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            {" "}
            <Link to="/contactUs">
              <button className="btn btn-secondary normal-case text-lg font-bold">
                Contact Us Now!!!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

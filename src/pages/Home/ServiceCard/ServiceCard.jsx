import { Link } from "react-router-dom";

const ServiceCard = ({ services }) => {
  const { id, name, image, price, short_description, button_text } = services;

  return (
    <div data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[150px]"
            src= {image}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold">
            {name}
          </h2>
          <p>{short_description}</p>
          <div className="card-actions">
          <div className="p-2 text-lg font-bold">$ {price}</div>
          </div>
          <div>
          <Link to={`/services/${id}`}><button className="btn btn-secondary normal-case rounded-md text-base font-bold w-full">{button_text}</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

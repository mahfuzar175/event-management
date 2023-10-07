import customerpic4 from "../assets/member1.png";
import customerpic5 from "../assets/member2.png";
import customerpic6 from "../assets/member3.png";
import Reviews from "../components/Reviews";

const Ratings = () => {
  return (
    <div>
        <Reviews></Reviews>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={customerpic4} alt="picture" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Mr. Rouf</h2>
            <p className="font-medium">Happy Customer</p>
            <div className="card-actions">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={customerpic5} alt="picture" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Mrs. Mita</h2>
            <p className="font-medium">Happy Customer</p>
            <div className="card-actions">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={customerpic6} alt="picture" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Mr. Zakir</h2>
            <p className="font-medium">Happy Customer</p>
            <div className="card-actions">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;

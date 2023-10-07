import { Link } from "react-router-dom";
import Reviews from "../../components/Reviews";
const Review = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4 mb-8">
      <h2 className="mt-8 mb-6 text-4xl font-bold text-center">
        Coustomers Review
      </h2>
      <Reviews></Reviews>
      <Link to='/ratings'><button className="btn btn-primary mt-4 normal-case">See All</button></Link>
    </div>
  );
};

export default Review;

import Banner from "../../components/Banner";
import AboutUs from "./AboutUs";
import Review from "./Review";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div><Banner></Banner></div>
      <div><Services></Services></div>
      <div><Review></Review></div>
      <div><AboutUs></AboutUs></div>
    </div>
  );
};

export default Home;

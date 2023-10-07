import Banner from "../../components/Banner";
import AboutUs from "./AboutUs";
import Review from "./Review";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
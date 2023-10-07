import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h2 className="mt-6 mb-4 text-4xl font-bold text-center">Our Services: {services.length}</h2>
        </div>
    );
};

export default Services;
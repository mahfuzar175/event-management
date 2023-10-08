import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);
    console.log(services);

    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h2 className="mt-8 mb-6 text-4xl font-bold text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 p-2 md:p-0">
            {
                services.map(service => <ServiceCard 
                    key={service.id}
                    services ={service}
                    ></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;
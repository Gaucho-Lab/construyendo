import ServiceDetails from "@/components/services/ServiceDetails";
import { services } from "@/data/services";


const Patrimoniales = () => {

    const selectedServiceObject = services.find(service => service.id === "seguros-patrimoniales");

    return (
        <section id="service-details" className="section bg-primary/5">
          <div className="container-custom">
            <ServiceDetails service={selectedServiceObject!} />
          </div>
        </section>
    )
};

export default Patrimoniales;
        
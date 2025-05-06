import ServiceDetails from "@/components/services/ServiceDetails";
import { services } from "@/data/services";


const Turismo = () => {

    const selectedServiceObject = services.find(service => service.id === "turismo");

    return (
        <section id="service-details" className="section bg-primary/5">
          <div className="container-custom">
            <ServiceDetails service={selectedServiceObject!} />
          </div>
        </section>
    )
};

export default Turismo;
        
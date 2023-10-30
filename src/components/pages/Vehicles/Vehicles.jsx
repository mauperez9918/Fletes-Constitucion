import React from "react";
import Card from "../../common/Card/Card";
import { vehiclesList } from "./vehiclesList";
import "./Vehicles.css";

const Vehicles = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F0F0F0" }}>
        <div className="main">
          <div className="main-layout">
            <section className="vehicles-section">
              {vehiclesList.map((vehicle) => (
                <Card
                  key={vehicle.id}
                  id={vehicle.id}
                  vehicleName={vehicle.name}
                  description={vehicle.description}
                  images={vehicle.images}
                />
              ))}
            </section>
            <a
              href="https://api.whatsapp.com/send?phone=5491144060203"
              className="wpp-a"
            >
              <img
                src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1697229436/Fletes%20Constitucion/whatsapp_sjuvva.png"
                alt="WhatsApp Icon"
                className="wpp-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicles;

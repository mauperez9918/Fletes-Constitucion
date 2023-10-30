import "./Carrousel.css";
import Carousel from "react-bootstrap/Carousel";

const Carrousel = ({ images, vehicleName, description }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image}
            className="d-block w-100"
            alt="Imagen del vehiculo"
          />
          <Carousel.Caption>
            <h3 className="font-shadow small-fontsize">{vehicleName}</h3>
            <p className="font-shadow small-fontsize">{description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrousel;

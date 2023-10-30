import "./Card.css";
import Carrousel from "../Carrousel/Carrousel";

const Card = ({ vehicleName, description, images, id }) => {
  return (
    <div className="card-container">
      <div className="carrousel">
        <Carrousel
          images={images}
          vehicleName={vehicleName}
          description={description}
        />
      </div>
      <div>
        <div className="button-div">
          <a href="https://api.whatsapp.com/send?phone=5491144060203">
            <button className="button">Solicitar presupuesto</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

import "./Home.css";

const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F0F0F0" }}>
        <img
          src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1697271249/Fletes%20Constitucion/norbert-kundrak-rzo_9LqreC0-unsplash_pxhzj2.jpg"
          alt="Banner Image"
          className="banner"
        />
        <div className="main">
          <div className="main-layout">
            <section className="services-section">
              <h2>Servicios</h2>
              <hr />
              <div className="services-list">
                <div>
                  <li>Vehículos con custodia satelital (GPS)</li>
                  <li>Minifletes</li>
                  <li>Viajes a todo el país</li>
                  <li>Personal con ART</li>
                </div>
                <div>
                  <li>Cobertura en toda Capital Federal y Gran Buenos Aires</li>
                  <li>Fletes y mudanzas</li>
                  <li>Camiones con pala hidráulica.</li>
                  <li>Guardamuebles</li>
                </div>
                <div>
                  <li>Operarios de carga</li>
                  <li>Movimientos de oficinas</li>
                  <li>Repartos</li>
                  <li>Desalojos judiciales</li>
                </div>
              </div>
            </section>

            <section className="map-section">
              <h2>Donde estamos?</h2>
              <hr />
              <div className="box-section">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6563.995559750913!2d-58.388403000000004!3d-34.654759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb594e2ffa2d%3A0xc297ee65b7b8bac8!2sMandisobi%202985%2C%20C1293%20CABA%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1697319625413!5m2!1ses-419!2sus"
                  loading="lazy"
                  className="google-map"
                ></iframe>
                <img
                  src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1697511322/Fletes%20Constitucion/pexels-photo-5025669_x7oflu.jpg"
                  alt="Storage Image"
                  className="storage-image"
                />
              </div>
            </section>

            <section className="float-section">
              <h2>Flota</h2>
              <hr />
              <p>
                Contamos con vehículos de diferentes capacidades acordes a cada
                necesidad y presupuesto. También contamos con pickups con caja
                abierta, ideales para carga en estacionamientos debido a su
                menor altura.
              </p>
            </section>
          </div>
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
    </>
  );
};

export default Home;

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content blanco">
        <img
          src="https://res.cloudinary.com/dwpppqzr4/image/upload/v1697270598/Fletes%20Constitucion/Constitucion__2_-removebg-preview_ddz1wq.png"
          alt="Logo"
          className="logo"
        />

        <div>
          <span>La mercadería viaja por cuenta y riesgo del cliente</span>
        </div>

        <div>
          <span>© 2016 Fletes Constitución. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

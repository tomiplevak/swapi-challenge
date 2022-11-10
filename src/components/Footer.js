import "./Footer.css";
import footerImg from "../assets/footer-img.png";

const Footer = () => {

    const navigateToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  return (
    <div className="footer container">
      <div className="row">
        <div className="col">
          <img onClick={navigateToTop} className="footer-img" src={footerImg} />
        </div>
        <div className="col">
          <p>
            Star Wars App powered by Swapi.
            <br />
            Frontend Challenge Mid Level.
            <br />
            Tomás Plevak
          </p>
        </div>
        <div className="col">
          <img onClick={navigateToTop} className="footer-img" src={footerImg} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

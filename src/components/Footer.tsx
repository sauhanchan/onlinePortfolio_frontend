import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
  faGithubSquare,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="text-center d-flex flex-column justifiy-content-center align-items-center">
        <section className="pt-2 mb-0">
          <a
            className="btn m-1"
            href="mailto:janee615@gmail.com?subject=Re:Jane Chan's Online Portfolio"
            role="button"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="footerA" />
          </a>

          <a
            className="btn m-1"
            href="https://www.linkedin.com/in/jane-chan-685083141/"
            target="_blank"
            role="button"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              color="white"
              className="footerA"
            />
          </a>

          <a
            className="btn m-1"
            href="https://github.com/sauhanchan/"
            target="_blank"
            role="button"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              size="2x"
              color="white"
              className="footerA"
            />
          </a>
        </section>
        <div
          style={{
            /*borderBottom: "0.5px solid rgba(60, 60, 60)",90,90,90*/
            width: "80%",
            flexGrow: "1",
            borderBottom: "3.5px solid rgb(35,115,130)",
            borderTop: "1.5px solid rgb(35,120,135)",
            height: "7px",
          }}
          className="mb-4 mt-2"
        ></div>

        <div>
          <a href="/">
            <img src="shLogo.png" width="100" />
          </a>
          <span
            className="mobileDisplayNone fs-4 ps-4"
            style={{ fontFamily: "Monotype Corsiva" }}
          >
            Web & Software Development
          </span>
        </div>
        <div className="text-center p-3">
          © 2024 Copyright: Sau Han, Chan (Jane)
          <br></br>
          Image credits to rawpixel.com, master1305, tirachardz, macrovector on
          &nbsp;
          <a href="http://www.freepik.com/" target="_blank">
            FreePik
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

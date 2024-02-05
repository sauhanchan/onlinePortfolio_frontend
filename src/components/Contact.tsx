import Navbar from "./Navbar";
import Footer from "./Footer";
import Heading from "./Heading";
import ContactForm from "./ContactForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <div className="bodyClass">
        <div className="wrapper">
          <Navbar />
          <Heading heading="CONTACT" />
          <div className="row col-lg-9 col-md-10 col-12 py-1 px-auto my-4">
            <div className="col-lg-7 col-md-7 col-12 order-1 order-md-0 p-3">
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="1x"
                  color="black"
                  className="mx-1 mt-3"
                />
                <span className="fw-bold">Email:&nbsp;</span>
                <a href="mailto:janee615@gmail.com?subject=Re:Jane Chan's Online Portfolio">
                  janee615@gmail.com
                </a>
              </div>

              <div className="d-flex">
                <div className="text-nowrap">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="1x"
                    color="black"
                    className="mx-1"
                  />
                  <span className="fw-bold">LinkedIn:&nbsp;</span>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/jane-chan-685083141/"
                    target="_blank"
                  >
                    <span className="mobileDisplayBlock">
                      www.linkedin.com/in/jane-chan-685083141
                    </span>
                  </a>
                </div>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  size="1x"
                  color="black"
                  className="mx-1"
                />
                <span className="fw-bold">GitHub:&nbsp;</span>
                <a href="https://github.com/sauhanchan/" target="_blank">
                  www.github.com/sauhanchan
                </a>
              </div>
              <ContactForm />
            </div>
            <div className="col-lg-5 col-md-5 col-12 order-0 order-md-1 text-center">
              <img
                src="contactV3.png"
                width={"80%"}
                className="rounded-circle img-fluid float-lg-end"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Contact;

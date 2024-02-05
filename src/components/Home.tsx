import { useState } from "react";
import Alert from "./Alert";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import DividerTitle from "./DividerTitle";
import SkillBar from "./SkillBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import CrossBtn from "./CrossBtn";

function Home() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  const handleClose = () => {
    setAlertVisibility(false);
  };

  return (
    <>
      <div className="bodyClass">
        <div className="wrapper">
          <Navbar />
          <Alert onClose={handleClose}>
            CHECK OUT{" "}
            <a href="projects" className="customAlertLink">
              MY PROJECTS
            </a>{" "}
            !
          </Alert>
          <Carousel />
          <h1 className="display-4 my-4 text-center">Welcome to my page!</h1>

          <fieldset className="p-2 mt-2 mb-4 row col-lg-8 col-md-10 col-11 px-auto pt-1 pb-4">
            <legend className="float-none w-auto p-2 headingClass fw-normal"></legend>
            <div className="col-md-7 col-sm-11 order-md-0 order-1 text-start">
              <div className="display-6">
                <b>Hi, I'm Jane Chan, </b>
                <br></br>a web developer,
                <br></br>a software developer,
                <br></br>a marketer,
                <br></br>& a designer.
              </div>
              <a href="about" className="d-block">
                <button className="mt-4 mb-2">ABOUT</button>
              </a>
            </div>
            <div className="col-md-5 col-sm-12 order-md-1 order-0 text-center d-flex justify-content-center align-items-center">
              <img
                src="shcProfilePic2_cir.gif"
                width="100%"
                className="rounded-circle img-fluid mb-2"
              />
            </div>
          </fieldset>

          <SkillBar />

          <div className="container-fluid gy-0 projectArea my-5">
            <DividerTitle title="KEY PROJECTS" titleHide="" />

            <div className="row col-lg-10 col-md-11 col-12 px-auto gx-0">
              <div className="col-lg-4 col-md-4 col-sm-6 overlay-containerProjects">
                <img
                  src="realtor.png"
                  width="100%"
                  className="mx-0 img-fluid"
                />
                <a href="projects">
                  <div className="overlayProjects">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 mobileStyle">
                      <h3 className="text-light">HTML, CSS</h3>
                      <br></br>
                      <h4 className="badge bg-dark p-2 text-light w-50">
                        Realtor Website
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 overlay-containerProjects">
                <img
                  src="wahLaah.png"
                  width="100%"
                  className="mx-0 img-fluid"
                />
                <a href="projects">
                  <div className="overlayProjects">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 mobileStyle">
                      <h3 className="text-light">Shopify</h3>
                      <br></br>
                      <h4 className="badge bg-dark p-2 text-light w-50">
                        WahLaah Online Store
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 overlay-containerProjects">
                <img
                  src="libBookPro.png"
                  width="100%"
                  className="mx-0 img-fluid"
                />
                <a href="projects">
                  <div className="overlayProjects">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 mobileStyle">
                      <h3 className="text-light">Angular, Express, MEAN</h3>
                      <br></br>
                      <h4 className="badge bg-dark p-2 text-light w-50">
                        LibBookPro Bookstore
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 overlay-containerProjects">
                <img
                  src="beeSmasher.png"
                  width="100%"
                  className="mx-0 img-fluid"
                />
                <a href="projects">
                  <div className="overlayProjects">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 mobileStyle">
                      <h3 className="text-light">JS, HTML, CSS</h3>
                      <br></br>
                      <h4 className="badge bg-dark p-2 text-light w-50">
                        Bee Smasher Game
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 overlay-containerProjects">
                <img
                  src="lightBoxID.png"
                  width="100%"
                  className="mx-0 img-fluid"
                />
                <a href="projects">
                  <div className="overlayProjects">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 mobileStyle">
                      <h3 className="text-light">JS, HTML, CSS</h3>
                      <br></br>
                      <h4 className="badge bg-dark p-2 text-light w-50">
                        Lightbox Website
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 overlay-containerProjects">
                <img
                  src="rGBuddy.png"
                  width="100%"
                  className="mx-0 img-fluid"
                />
                <a href="projects">
                  <div className="overlayProjects">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 mobileStyle">
                      <h3 className="text-light">React, Firebase, NodeJS</h3>
                      <br></br>
                      <h4 className="badge bg-dark p-2 text-light w-50">
                        RGBuddy Website
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <a href="projects" className="d-block text-center">
              <button className="mt-5 mb-2">LEARN MORE</button>
            </a>
          </div>
          <DividerTitle title="WHAT PEOPLE SAY" titleHide=" ABOUT ME" />
          <div className="container gy-5 mb-3">
            <div className="row custom-lg-width custom-md-width custom-sm-width">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip className="custom-tooltip">
                      My previous employers could always rest assured whenever
                      assigning crucial tasks to me.
                    </Tooltip>
                  }
                >
                  <div className="product-grid d-flex flex-column justify-content-center align-items-center p-1">
                    <img
                      src="reliable.jpg"
                      alt="reliable cooperation trustworthy"
                      width="100%"
                      className="img-fluid"
                    />
                    <div
                      className="text-center"
                      style={{
                        borderBottom: "solid 5px",
                        borderTop: "solid 1.5px",
                        width: "70%",
                      }}
                    >
                      RELIABLE
                    </div>
                  </div>
                </OverlayTrigger>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip className="custom-tooltip">
                      When faced with unfamiliar tasks at my previous jobs, I
                      effectively handled them; quick learning makes me
                      adaptable to this rapidly changing world.
                    </Tooltip>
                  }
                >
                  <div className="product-grid d-flex flex-column justify-content-center align-items-center p-1">
                    <img
                      src="fastLearnerClock.png"
                      alt="fast learner, adaptive, "
                      width="100%"
                      className="img-fluid"
                    />
                    <div
                      className="text-center"
                      style={{
                        borderBottom: "solid 5px",
                        borderTop: "solid 1.5px",
                        width: "75%",
                      }}
                    >
                      FAST LEARNER
                    </div>
                  </div>
                </OverlayTrigger>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip className="custom-tooltip">
                      My skill set is comprehensive as I am committed to
                      lifelong learning, with a passion for continuous
                      improvement every day.
                    </Tooltip>
                  }
                >
                  <div className="product-grid d-flex flex-column justify-content-center align-items-center p-1">
                    <img
                      src="versatile.png"
                      alt="multitasking versatile"
                      width="100%"
                      className="img-fluid"
                    />
                    <div
                      className="text-center"
                      style={{
                        borderBottom: "solid 5px",
                        borderTop: "solid 1.5px",
                        width: "70%",
                      }}
                    >
                      VERSATILE
                    </div>
                  </div>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="container mt-5">
          <div
            id="testimonialCard"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/*<h4 className="p-1 pt-4 pb-0 text-center">
                What People Say
                <span className="mobileDisplayNone"> About Me</span>
              </h4>
              */}

              <div className="carousel-item active">
                <div className="carousel-caption">
                  <p>
                    Jane approaches each project with dedication, consistently
                    meeting deadlines. Her excellent skill set is a very
                    valuable asset. Her ability to efficiently handle multiple
                    tasks is very commendable. Jane was a remarkable colleague &
                    contributor.
                  </p>
                  <div id="testimonialName">Kelly Law, General Manager</div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-caption">
                  <p>
                    Jane is an excellent team player, has a very good work ethic
                    and worked long hours when required of her. Her role saw her
                    working across and coordinating multiple platforms. Jane is
                    organized and works well in a structured office environment.
                  </p>
                  <div id="testimonialName">
                    Kirsty Hulme, Managing Director
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <p>
                    Jane is a kind and helpful person. She has demonstrated
                    devotion and responsibility in her services, and her
                    pleasant personality has fostered a positive relationship
                    with us. Her overall performance has met our expectations.
                  </p>
                  <div id="testimonialName">Tevas Lau, Manager</div>
                </div>
              </div>
            </div>

            {/* Prev and Next buttons */}
            <a
              className="carousel-control-prev"
              href="#testimonialCard"
              data-bs-slide="prev"
              role="button"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="1x"
                className="prevNextStyle"
              />
            </a>
            <a
              className="carousel-control-next"
              href="#testimonialCard"
              data-bs-slide="next"
              role="button"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                size="1x"
                className="prevNextStyle"
              />
            </a>
          </div>
        </div>
        {}
        <Footer />
      </div>
    </>
  );
}

export default Home;

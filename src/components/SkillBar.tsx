import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faJs,
  faHtml5,
  faGithub,
  faJava,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

//import Carousel from "react-multi-carousel";
import bootstrap from "bootstrap";
import { useEffect } from "react";
import { Carousel } from "bootstrap";

const SkillBar = () => {
  return (
    <>
      <div
        id="multiItemCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row col-lg-11 col-md-11 col-12 text-center my-2 mb-2 py-2">
              <div className="col-md-2 col-4 px-2 py-2">
                <img src="html.png" alt="html" width="50%" />
              </div>
              <div className="col-md-2 col-4 px-2 py-2">
                <img src="css.png" alt="css" width="50%" />
              </div>
              <div className="col-md-2 col-4 px-2 py-2">
                <img src="JavaScript.png" alt="JavaScript" width="50%" />
              </div>
              <div className="col-md-2 col-4 px-2 py-2">
                <img src="typescript.png" alt="typescript" width="50%" />
              </div>
              <div className="col-md-2 col-4 px-2 py-2">
                <img src="react.png" alt="react" width="50%" />
              </div>
              <div className="col-md-2 col-4 px-2 py-2">
                <img src="angular.png" alt="angular" width="50%" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row col-lg-11 col-md-11 col-12 text-center my-2 mb-3 py-2">
              <div className="col-md-2 col-4 px-2 py-2">
                <img src="nodejs.png" alt="nodejs" width="50%" />
              </div>
              <div className="col-md-2 col-4 px-2 py-2">
                <img src="expressJs.png" alt="expressJs" width="50%" />
              </div>
              <div className="col-md-2 col-4 px-2 py-2">
                <img src="Java.png" alt="Java" width="50%" />
              </div>
              <div className="col-md-2 col-4 px-2 py-2">
                <img src="cSharp.png" alt="cSharp" width="50%" />
              </div>
              <div className="col-md-2 col-4 px-2 py-2">
                <img src="bootstrap5.png" alt="bootstrap5" width="50%" />
              </div>
              <div className="col-md-2 col-4 px-2 py-2">
                <img src="figma.png" alt="figma" width="50%" />
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev buttonPrevNext"
          type="button"
          data-bs-target="#multiItemCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next buttonPrevNext"
          type="button"
          data-bs-target="#multiItemCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*Slider - later
      <div className="containerSkillBar h-100">
        <div className="row align-items-center justify-content-between h-100">
          <div className="containerSkillBar rounded">
            <h1 className="text-center">Featured in:</h1>
            <div className="slider">
              <div className="logos">
                <FontAwesomeIcon
                  icon={faJs}
                  size="4x"
                  className="prevNextStyle fontAwesomeLogo"
                />
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="4x"
                  className="prevNextStyle fontAwesomeLogo"
                />
                <FontAwesomeIcon
                  icon={faGithub}
                  size="4x"
                  className="prevNextStyle fontAwesomeLogo"
                />{" "}
                <FontAwesomeIcon
                  icon={faJava}
                  size="4x"
                  className="prevNextStyle fontAwesomeLogo"
                />{" "}
                <FontAwesomeIcon
                  icon={faCss3}
                  size="4x"
                  className="prevNextStyle fontAwesomeLogo"
                />
                <FontAwesomeIcon
                  icon={faCss3}
                  size="4x"
                  className="prevNextStyle fontAwesomeLogo"
                />
              </div>
              <div className="logos">
                <FontAwesomeIcon
                  icon={faJs}
                  size="4x"
                  className="prevNextStyle fontAwesomeLogo"
                />
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="4x"
                  className="prevNextStyle fontAwesomeLogo"
                />
                <FontAwesomeIcon
                  icon={faGithub}
                  size="4x"
                  className="prevNextStyle fontAwesomeLogo"
                />{" "}
                <FontAwesomeIcon
                  icon={faJava}
                  size="4x"
                  className="prevNextStyle fontAwesomeLogo"
                />{" "}
                <FontAwesomeIcon
                  icon={faCss3}
                  size="4x"
                  className="prevNextStyle fontAwesomeLogo"
                />
                <FontAwesomeIcon
                  icon={faCss3}
                  size="4x"
                  className="prevNextStyle fontAwesomeLogo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </>
  );
};

export default SkillBar;

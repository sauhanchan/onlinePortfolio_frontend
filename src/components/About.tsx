import Navbar from "./Navbar";
import Footer from "./Footer";
import Heading from "./Heading";
import DividerTitle from "./DividerTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faEarthAmericas,
  faHeadphones,
  faAward,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />
      <Heading heading="ABOUT" />
      <div className="row col-lg-8 col-md-8 col-11 mr-5 ">
        <div className="col-lg-7 col-md-7 col-12 order-1 order-md-0">
          <div>
            <h1>Hi, I'm Jane Chan,</h1>
            <h3 className="fs-3 mb-3">
              a web & software developer, <br></br>a marketer, and a designer.
            </h3>
            <p className="textJustifyClass Lead">
              As a recent graduate from Centennial College with a passion for
              software and web development, coupled with over 5 years of
              experience as a Marketing professional specializing in developing
              and executing more than 35 strategic marketing plans, I possess a
              strong foundation in programming languages and transferable
              skills. All these uniquely position me to bridge the gap between
              technology and business with innovative solutions.
              <br></br>
              <br></br>
              <FontAwesomeIcon
                icon={faLightbulb}
                size="2x"
                className="faMyBrandStyle"
              />
              {/* <span className="fs-4" style={{ fontFamily: "Monotype Corsiva" }}> */}
              <span
                className="fs-6 fw-bolder"
                style={{ fontFamily: "Lucida Handwriting" }}
              >
                &nbsp;My motto: Be open to new ideas
              </span>
            </p>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-12 order-0 order-md-1">
          <div className="text-center overlay-containerAbout mb-3">
            <img
              src="shcProfilePic_sq.jpg"
              width={"90%"}
              className="rounded-circle img-fluid float-lg-end"
            />
            <img
              src="shcProfilePicJaneP.jpg"
              width={"90%"}
              className="rounded-circle img-fluid overlayAbout"
            />
          </div>
        </div>
      </div>
      <DividerTitle title="Can I tell you more?" titleHide="" />
      <div className="container-fluid projectAreaRight containerRect">
        <div className="backgroundRectLeft"></div>
        <div className="row col-lg-9 col-md-10 col-12 py-1 px-auto">
          <div className="contentRectLeft col-md-6 col-11 eachDivMargin">
            <div className="display-6 mb-2">Certainly!</div>
            <div>
              <img src="hongkongflag.png" alt="hong kong" width="30px" />
              Born and raised in Hong Kong
            </div>
            <div>
              <img src="australiaflag.jpg" alt="australia" width="30px" />
              Working holiday in Australia
            </div>
            <div>
              <img src="taiwanflag.png" alt="taiwan" width="30px" />
              Worked in Taiwan
            </div>
            <div className="d-flex">
              <div>
                <img src="canadaflag.png" alt="canada" width="30px" />
              </div>
              <div>
                Studied in Canada, just graduated<br></br>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="1x"
                  className="faMyBrandStyle pe-2"
                />
                Seeking a web or software related position
              </div>
            </div>
            <br></br>
            <div className="display-6 mb-2">plus ...</div>
            <div className="d-flex">
              <div>
                <FontAwesomeIcon
                  icon={faEarthAmericas}
                  size="1x"
                  className="faMyBrandStyle pe-2"
                />
              </div>
              <div>
                I love traveling so much that I have already been to over 20
                countries!
              </div>
            </div>
            <div className="d-flex mb-4">
              <div>
                <FontAwesomeIcon
                  icon={faHeadphones}
                  size="1x"
                  className="faMyBrandStyle pe-2"
                />
              </div>
              <div>
                I love listening to others' stories as it helps me stay
                creative, innovative, and motivated.
              </div>
            </div>
          </div>
          <div className="contentRectLeft col-md-6 col-11 eachDivMargin">
            <div className="display-6 mb-2">My education:</div>
            <div className="d-flex">
              <div>
                <img src="centennialcollege.png" width="30px" />
              </div>
              <div>
                Software Engineering Technician
                <br></br>
                <FontAwesomeIcon
                  icon={faAward}
                  size="1x"
                  className="faMyBrandStyle pe-2"
                />
                Received 2 scholarships{" "}
                <span className="mobileDisplayNone">as awards</span>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <img src="hku.png" width="30px" />
              </div>
              <div>
                Bachelor of Science{" "}
                <span className="mobileDisplayBlock">(Risk Management)</span>
              </div>
            </div>
            <div>
              <img src="yoastseo.png" width="30px" />
              SEO for beginners (Online course)
            </div>
            <br></br>
            <div className="rounded-4 p-2 checkOutRect text-center">
              <div className="display-6 mb-3">
                Check out what <br></br>I have done & offer
              </div>
              <div className="d-flex flex-wrap justify-content-around mb-3">
                <div className="my-2">
                  <a href="projects">
                    <button>Projects</button>
                  </a>
                </div>
                <div className="my-2">
                  <a href="services">
                    <button>Services</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DividerTitle title="Technical Skills" titleHide="" />

      <div className="order-3">
        {/* For the whole technical skills logo part */}
        <div className="container-fluid containerRect projectAreaLeft">
          <div className="backgroundRectRight"></div>

          <div className="row col-lg-9 col-md-10 col-12 text-center my-2 py-1 contentRectRight ">
            <div className="col-md-2 col-4 px-2 py-2">
              <img src="html.png" alt="html" width="70%" />
            </div>
            <div className="col-md-2 col-4 px-2 py-2">
              <img src="css.png" alt="css" width="70%" />
            </div>
            <div className="col-md-2 col-4 px-2 py-2">
              <img src="JavaScript.png" alt="JavaScript" width="70%" />
            </div>
            <div className="col-md-2 col-4 px-2 py-2">
              <img src="typescript.png" alt="typescript" width="70%" />
            </div>
            <div className="col-md-2 col-4 px-2 py-2">
              <img src="react.png" alt="react" width="70%" />
            </div>
            <div className="col-md-2 col-4 px-2 py-2">
              <img src="angular.png" alt="angular" width="70%" />
            </div>
            <div className="col-md-2 col-4 px-2 py-2">
              <img src="nodejs.png" alt="nodejs" width="70%" />
            </div>
            <div className="col-md-2 col-4 px-2 py-2">
              <img src="expressJs.png" alt="expressJs" width="70%" />
            </div>
            <div className="col-md-2 col-4 px-2 py-2">
              <img src="Java.png" alt="Java" width="70%" />
            </div>
            <div className="col-md-2 col-4 px-2 py-2">
              <img src="cSharp.png" alt="cSharp" width="70%" />
            </div>
            <div className="col-md-2 col-4 px-2 py-2">
              <img src="bootstrap5.png" alt="bootstrap5" width="70%" />
            </div>
            <div className="col-md-2 col-4 px-2 py-2">
              <img src="figma.png" alt="figma" width="70%" />
            </div>
          </div>
        </div>
        {/* For the technical skills summary table*/}
        <div className="row col-lg-9 col-md-10 col-12 py-1 px-auto">
          <table className="table-responsive-sm my-3">
            <tr>
              <th>Programming Languages</th>
              <td>
                CSS, HTML, JavaScript, TypeScript, Python, C#, Java, MySQL,
                PL/SQL
              </td>
            </tr>
            <tr>
              <th>Libraries or Frameworks</th>
              <td>Bootstrap, React JS, Angular JS, Express JS</td>
            </tr>
            <tr>
              <th>Adobe Products</th>
              <td>Photoshop, Illustrator, InDesign</td>
            </tr>
            <tr>
              <th>Others</th>
              <td>Git & GitHub, Figma, MongoDB, Node JS</td>
            </tr>
          </table>
        </div>
        <div className="container-fluid gy-0 projectAreaLeft">
          <DividerTitle title="Soft skills" titleHide="" />

          <div className="row col-lg-9 col-md-10 col-12 text-center">
            <div className="col-lg-3 col-md-3 col-6 py-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src="projManagement.png"
                width={"80%"}
                className="rounded-circle img-fluid"
              />
              <div
                className="mt-3"
                style={{
                  borderBottom: "solid 5px",
                  borderTop: "solid 1.5px",
                  width: "80%",
                }}
              >
                Project management
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 py-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src="attentionToDetail.png"
                width={"80%"}
                className="rounded-circle img-fluid"
              />
              <div
                className="mt-3"
                style={{
                  borderBottom: "solid 5px",
                  borderTop: "solid 1.5px",
                  width: "80%",
                }}
              >
                Attention to detail
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 py-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src="problemSolving.png"
                width={"80%"}
                className="rounded-circle img-fluid"
              />
              <div
                className="mt-3"
                style={{
                  borderBottom: "solid 5px",
                  borderTop: "solid 1.5px",
                  width: "80%",
                }}
              >
                Problem solving
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6 py-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src="criticalAnalysis.png"
                width={"80%"}
                className="rounded-circle img-fluid"
              />
              <div
                className="mt-3"
                style={{
                  borderBottom: "solid 5px",
                  borderTop: "solid 1.5px",
                  width: "80%",
                }}
              >
                Critical analysis
              </div>
            </div>
          </div>
        </div>
        {/* The bottom CTA part */}
        <div className="text-center">
          <h4
            className="mt-3 py-2 text-white text-center"
            style={{ backgroundColor: "rgb(133, 226, 226)" }}
          >
            <span className="mobileDisplayNone">
              Want to know me more , or what services I have?
            </span>
            <span className="mobileDisplayNoneLgMd">
              Want to see my projects?
            </span>
          </h4>
          <p>
            Just check out my projects here.
            <a href="projects" className="d-block">
              <button className="mt-3 mb-1">Projects</button>
            </a>
          </p>
          <div className="mobileDisplayNone">
            If you would like to have my resume or services, <br></br>
            feel free click <a href="contact">here</a> or on the below button to
            get in touch! <br></br>I will customize one for you!
          </div>
          <span className="mobileDisplayNoneLgMd">
            <h4
              className="mt-3 py-2 text-white text-center"
              style={{ backgroundColor: "rgb(133, 226, 226)" }}
            >
              Want my resume/services?
            </h4>
            Just drop me a message, <br></br>and I will customize one for you!
          </span>
          <a href="contact" className="d-block">
            <button className="mt-3 mb-4">Contact</button>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;

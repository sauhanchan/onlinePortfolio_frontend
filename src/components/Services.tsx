import Navbar from "./Navbar";
import Footer from "./Footer";
import Heading from "./Heading";
//import "mdb-react-ui-kit/dist/css/mdb.min.css"; //for mdb
import ServiceCard from "./ServiceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopFile,
  faLaptopCode,
  faMobileScreen,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  const serviceTypeArray = [
    {
      colMdNo: 12,
      imageSrc: "realtor.png",
      fontAwesomeIcon: (
        <FontAwesomeIcon
          icon={faLaptopFile}
          size="1x"
          className="fontAwesomeIconColor"
        />
      ),
      title: "Web development",
    },
    {
      colMdNo: 6,
      imageSrc: "generalProgramming.png",
      fontAwesomeIcon: (
        <FontAwesomeIcon
          icon={faLaptopCode}
          size="1x"
          className="fontAwesomeIconColor"
        />
      ),
      title: "General programming",
    },
    {
      colMdNo: 6,
      imageSrc: "graphicDesignBook.png",
      fontAwesomeIcon: (
        <FontAwesomeIcon
          icon={faPaintBrush}
          size="1x"
          className="fontAwesomeIconColor"
        />
      ),
      title: "Graphic design",
    },
    {
      colMdNo: 12,
      imageSrc: "mobileUIUX.png",
      fontAwesomeIcon: (
        <FontAwesomeIcon
          icon={faMobileScreen}
          size="1x"
          className="fontAwesomeIconColor"
        />
      ),
      title: "Mobile apps UI/UX",
    },
  ];

  return (
    <>
      <div className="bodyClass">
        <div className="wrapper">
          <Navbar />
          <Heading heading="SERVICES" />
          <div className="row col-lg-9 col-md-10 col-12 py-1 px-auto">
            {/* For the service page intro */}
            <div className="text-center">
              <h3>
                Love my projects
                <span className="mobileDisplayNone"> & want to know more</span>?
              </h3>
              <p className="py-1 mb-4">
                Check out what services I offer below!
              </p>
            </div>

            {/* To render the ServiceCard component for the services provided */}
            {serviceTypeArray.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>
          {/* For the service page CTA */}
          <div className="text-center">
            <h4
              className="mt-3 py-2 text-white"
              style={{ backgroundColor: "rgb(133, 226, 226)" }}
            >
              Keen to learn more
              <span className="mobileDisplayNone"> about these services</span>?
            </h4>
            I am just one click away!
            <p className="fs-xs">
              Just click <a href="contact">here</a> or
              <span className="mobileDisplayBlock">
                {" "}
                on the below button to get in touch!
              </span>
            </p>
            <a href="contact">
              <button className="mt-2 mb-4">Contact me</button>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Services;

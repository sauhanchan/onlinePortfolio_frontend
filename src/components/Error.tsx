import Navbar from "./Navbar";
import Footer from "./Footer";
import Heading from "./Heading";
import ContactForm from "./ContactForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFrown } from "@fortawesome/free-regular-svg-icons";

function Error() {
  return (
    <>
      <div className="bodyClass">
        <div className="wrapper">
          <Navbar />
          <Heading heading="ERROR" />
          <div className="col-lg-9 col-md-10 col-12 py-1 px-auto my-4 text-center mx-auto">
            <FontAwesomeIcon icon={faFaceFrown} size="5x" color="grey" />
            <br></br>
            <br></br>
            Error: The requested URL was not found.
            <br></br>
            <br></br>
            Go back to the home page.
            <br></br>
            <a href="/">
              <button className="mt-2 mb-4">Home</button>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Error;

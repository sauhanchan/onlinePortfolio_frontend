import Navbar from "./Navbar";
import Footer from "./Footer";
import Heading from "./Heading";

import { useLocation } from "react-router-dom"; //6

//#Redirect website to home page (2 imports): 1
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function FormSubmissionResult() {
  const { state } = useLocation(); //7

  //#Redirect website to home page: 2
  const navigate = useNavigate();

  //#Redirect website to home page - useEffect: 3
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      //Redirect to home page if true, else contact page after a delay
      navigate(state?.submissionResult === "success" ? "/" : "/contact");
    }, 5000);
    // Clear the timeoutId when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <>
      <div className="bodyClass">
        <div className="wrapper">
          <Navbar />
          <Heading heading="CONTACT" />
          <div className="row col-lg-7 col-md-7 col-12 py-1 px-auto my-4">
            <div className="col-lg-6 col-md-6 col-12 order-1 order-md-0 mt-2 p-3 text-center">
              {/* //8: can use "state?.propName" inside return; must use "?", otherwise if state is null -> error */}
              {/* Show a submitted message if successful */}
              {state?.submissionResult === "success" && (
                <div>
                  <p>
                    The form is submitted successfully. <br></br>Thank you for
                    getting in touch.
                  </p>
                  <br></br>
                  <a href="/">
                    <button>Home</button>
                  </a>
                </div>
              )}
              {/* Show a failed message if not successful */}
              {state?.submissionResult === "fail" && (
                <div>
                  <p>
                    Oops, sorry! Form submission failed. <br></br>Please try
                    again.
                  </p>
                  <br></br>
                  <a href="contact">
                    <button>Contact</button>
                  </a>
                </div>
              )}
              {state?.submissionResult === null && (
                <p>Sorry...no forms is submitted.</p>
              )}
            </div>
            <div className="col-lg-6 col-md-6 col-12 order-0 order-md-1 text-center">
              {/* Show a handshake image if successful */}
              {state?.submissionResult === "success" && (
                <img
                  src="contactV3.png"
                  width={"60%"}
                  className="rounded-circle img-fluid"
                />
              )}
              {/* Show a brand logo if not successful*/}
              {(state?.submissionResult === "fail" ||
                state?.submissionResult === null) && (
                <img
                  src="shLogo.png"
                  width={"60%"}
                  className="rounded-circle img-fluid"
                />
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default FormSubmissionResult;

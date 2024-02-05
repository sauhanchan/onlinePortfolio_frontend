import { useRef, useState } from "react"; //1.1 //STEP1
import emailjs from "@emailjs/browser"; //STEP2
import { useNavigate } from "react-router-dom"; //1.2
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null); //STEP3
  const navigate = useNavigate(); //2
  //const [submissionResult, setSubmissionResult] = useState<string | null>(null); //3

  //UserPublicKey
  emailjs.init("VOicI081qcDlEY1PP"); //STEP4

  //STEP5
  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_vg3pfuo", "template_bpx4kri", form.current) //serviceID, templateID
        .then(
          function (response) {
            console.log("The email is sent successfully:", response);
            //setSubmissionResult("success"); //4.1 need?
            navigate("/submission", {
              state: { submissionResult: "success" },
            }); //4.2: the 2nd arg is for passing props to the next page
          },
          function (error) {
            console.log("The email sending is failed:", error);
            //setSubmissionResult("fail"); //5.1 need?
            navigate("/submission", {
              state: { submissionResult: "fail" },
            }); //5.2
          }
        );
    } else {
      console.error("Form element is not found");
    }
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="mt-4">
        {/*STEP6*/}
        <h2
          className="mt-5 mb-4 py-2 text-white text-center"
          style={{ backgroundColor: "rgb(133, 226, 226)" }}
        >
          WANT TO REACH OUT?
        </h2>
        <p className="text-md-center my-4">
          I am always here
          <span className="mobileDisplayNone">
            {" "}
            to help you with your needs
          </span>
          ! <br></br>Just feel free to get in touch! <br></br>
          <FontAwesomeIcon
            icon={faQuestionCircle}
            size="1x"
            className="faMyBrandStyle"
          />
          &nbsp;All types of questions are welcome!
        </p>
        <div className="my-1 fw-bold">
          <label htmlFor="fname" className="col-lg-3 col-md-3 col-10">
            *First name:
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            required
            className="col-lg-7 col-md-7 col-10"
          />
        </div>
        <div className="my-1 fw-bold">
          <label htmlFor="lname" className="col-lg-3 col-md-3 col-10">
            Last name:
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            className="col-lg-7 col-md-7 col-10"
          />
        </div>
        <div className="my-1 fw-bold">
          <label htmlFor="email" className="col-lg-3 col-md-3 col-10">
            *Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="col-lg-7 col-md-7 col-10"
          />
        </div>
        <div className="my-1 fw-bold">
          <label htmlFor="phone" className="col-lg-3 col-md-3 col-10">
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="col-lg-7 col-md-7 col-10"
          />
        </div>
        <div className="d-md-flex my-1 fw-bold">
          <label htmlFor="message" className="col-lg-3 col-md-3 col-10">
            *Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            cols={40}
            className="col-lg-7 col-md-7 col-10"
            required
          ></textarea>
        </div>
        <div className="my-4">
          <button
            type="submit"
            value="Submit"
            className="offset-md-3 offset-col-10 col-lg-3 col-md-3 col-5"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;

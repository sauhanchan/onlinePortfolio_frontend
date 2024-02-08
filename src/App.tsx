import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./components/Services";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import FormSubmissionResult from "./components/FormSubmissionResult";
import Error from "./components/Error";

//#Newly added for server 1/2 ///
import { Key, useEffect, useState } from "react"; //#Added useState for rendering data 1
import axios from "axios";
import { ObjectId } from "mongodb";

//For the contact button1
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommenting } from "@fortawesome/free-solid-svg-icons";
import CrossBtn from "./components/CrossBtn";
import Project from "./components/Project";

//#Added interface for rendering data 2
interface Data {
  id?: string;
  //can use key, but then when printing it out, we need to use String(varName);
  //not ObjectId as "Type 'ObjectId | undefined' is not assignable to type 'Key | null | undefined'"
  //not _id as changed in the server side (inside product.model.js)

  ////
  title: string;
  description: string;
  published: boolean;
  type: string;
  link: string;
  image: string[]; //@try array later
  displayLbl: boolean;
  labelContent: string;
  language: string;
  libOrFramework: string;
  tool: string;
  skill: string;
  other: string;
  __v: Number;
  ////#this interface part should be not related to the actuall collection structure,
  //// but still need to define it first as we need to use the property name in the code

  /*
  key: string;
  value: string;
  */ //*Q: shd not be here actually?
}

const App: React.FC = () => {
  //#Added for rendering data 3
  //const [data, setData] = useState<Data[]>([]);

  //For the contact button2
  const [closeBtnDisplay, setCloseBtnDisplay] = useState(false);
  const [contactBtnDisplay, setContactBtnDisplay] = useState(true);
  const handleMouseEnter = () => {
    setCloseBtnDisplay(true);
  };

  const handleMouseLeave = () => {
    setCloseBtnDisplay(false);
  };

  //#Newly added for server 2/2:
  // useEffect(() => {
  //   //#Replace with my server URL (the deployed one) (but since app seems no need to connect to the db, can del actually?)
  //   const apiUrl = "http://localhost:8080";

  //   /*
  //   axios
  //     .get(`${apiUrl}/api/products`) //#Original: /api/data
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error - Fetching data:", error);
  //     });
  //   */

  //   //#Added for rendering data 4
  //   axios
  //     .get<Data[]>(`${apiUrl}/api/products`)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error - Fetching data:", error);
  //     });
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submission" element={<FormSubmissionResult />} />
          <Route path="*" element={<Error />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>

      {/*#Added for rendering data 5*/}
      {/*
      <h1>Data from MongoDB:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>
              {item.name}
              {/*String(item.id):{item.id} {String(item.published)}
              {/* Type 'Number' is not assignable to type 'ReactNode'.
            </strong>{" "}
            {item.description}
            <img src={`../public/${item.name}.png`}></img>
          </li>
        ))}
      </ul>
        */}

      {/*For the contact button3*/}
      <div
        className="contactButtonClass"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip className="custom-tooltip">Contact me</Tooltip>}
        >
          <div>
            {closeBtnDisplay && (
              <CrossBtn
                closeFunction={() => setContactBtnDisplay(false)}
                btnCss=""
              />
            )}
            {contactBtnDisplay && (
              <a href="contact">
                <FontAwesomeIcon
                  icon={faCommenting}
                  size="3x"
                  className="fontAwesomeIconColor"
                  style={{ opacity: "0.8" }}
                />
              </a>
            )}
          </div>
        </OverlayTrigger>
      </div>
      {}
    </>
  );
};

export default App;

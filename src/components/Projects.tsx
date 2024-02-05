import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";

import { Key, useEffect, useState } from "react";
import axios from "axios";
import Heading from "./Heading";

interface Data {
  id?: string;
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
}

const Projects = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8082"; //*1/2 Need to change this (& mark notes in app.tsx 2+7 server + data render)

    axios
      .get<Data[]>(`${apiUrl}/api/itprojects`) //*2/2 Need to change this also for connecting to another db (all notes here)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error - Fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="bodyClass">
        <div className="wrapper">
          <Navbar />
          <Heading heading="PROJECTS" />
          <div className="row custom-lg-width custom-md-width custom-sm-width">
            {data.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
          {/* For the project page CTA */}
          <div className="text-center">
            <h4
              className="mt-3 py-2 text-white"
              style={{ backgroundColor: "rgb(133, 226, 226)" }}
            >
              Want to learn more
              <span className="mobileDisplayNone">
                {" "}
                about the behind-the-scenes details
              </span>
              ?
            </h4>
            <p className="fs-xs">
              Feel free to <a href="contact">get in touch</a>.
              <span className="mobileDisplayNone">
                <br></br>
                <br></br>Or, if you would like to explore more about my
                services, <br></br>
                just click <a href="services">here</a> or on the below button to
                check them out!
              </span>
            </p>

            <span className="mobileDisplayNoneLgMd">
              <h4
                className="mt-3 py-2 text-white"
                style={{ backgroundColor: "rgb(133, 226, 226)" }}
              >
                Want my services?
              </h4>
              Just click <a href="services">here</a>
              <br></br>or on the below button!
            </span>
            <a href="services" className="d-block">
              <button className="mt-2 mb-4">Services</button>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;

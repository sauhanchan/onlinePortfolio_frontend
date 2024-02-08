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
  //__v: Number;
}

const Projects = () => {
  // const [data, setData] = useState<Data[]>([]);

  // useEffect(() => {
  //   ////cm for deployment:const apiUrl = "http://localhost:8082"; //*1/2 Need to change this (& mark notes in app.tsx 2+7 server + data render)
  //   const apiUrl = "https://jconlineportfoliobe.onrender.com"; //#Only need to change this link

  //   axios
  //     .get<Data[]>(`${apiUrl}/api/itprojects`) //*2/2 Need to change this also for connecting to another db (all notes here)
  //     .then((response) => {
  //       setData(response.data.sort((a, b) => a.other.localeCompare(b.other)));
  //     })
  //     .catch((error) => {
  //       console.error("Error - Fetching data:", error);
  //     });
  // }, []);

  const data = [
    {
      title: "LibBookPro",
      type: "Web application",
      language: "HTML, CSS, JavaScript",
      tool: "Visual Studio Code, GitHub, MongoDB, Render",
      libOrFramework: "Angular, Express, Bootstrap",
      description:
        "This application is designed for bookstore use. I collaborated with a team of four on this project. Users can easily search for books on the website, while administrators, upon logging in, have the capability to perform CRUD operations (Create, Read, Update, Delete) directly on the database. This project showcases my skills in developing web applications with CRUD operations, authentication, and authorization functions, along with an emphasis on creating a visually appealing UI/UX design.",
      image: ["libBookPro.png", "LibBookPro2.png"],
      published: true,
      displayLbl: true,
      labelContent: "MEAN stack",
      link: "https://frabjous-mermaid-38f8a7.netlify.app/home",
      other: "1Group project",
      skill:
        "Coding, database operations, UI/UX design, organizational & problem-solving skills, teamwork",
      id: "65aeb066f9451360dab02eca",
    },
    {
      title: "WahLaah",
      description:
        "When I was working at Sure Step Asia, I collaborated with the IT team and designers on a website design project. This website showcases multiple brands distributed by the company, providing customers with the ability to browse and shop online. I have included it in my portfolio to highlight my skills in coordinating website enhancement projects, leveraging my marketing expertise, and applying knowledge in UI/UX design.",
      published: true,
      type: "Online Store",
      link: "https://www.wah-laah.com/",
      image: ["wahLaah.png", "wahLaah2.png"],
      displayLbl: true,
      labelContent: "Retail",
      language: "HTML, CSS",
      libOrFramework: "/",
      tool: "Shopify",
      skill:
        "UI/UX design, marketing, project management, organizational & problem-solving skills",
      other: "2Workplace project",
      id: "65bc252d02751ca40be8cb9f",
    },
    {
      title: "Bee Smasher",
      description:
        "This online game allows players to earn scores by successfully hitting bees; the speed increases with the scores. Players can choose to reset the game speed or score at any time. This is an individual project, and I have included it in my portfolio to showcase my skills in creating interactive online games, primarily using the canvas and object-oriented concepts in JavaScript.",
      published: true,
      type: "Online Game",
      link: "http://studentweb.cencol.ca/schan253/comp125/assignment3/assignment3.html",
      image: ["beeSmasher.png", "beeSmasher2.png"],
      displayLbl: true,
      labelContent: "Game",
      language: "HTML, CSS, JavaScript",
      libOrFramework: "/",
      tool: "Visual Studio Code, Developer tools",
      skill: "Game coding, debugging, UI design",
      other: "3Individual project",
      id: "65bc608c2ef504d20f125d46",
    },
    {
      title: "My Portfolio",
      type: "Website",
      language: "HTML, CSS, TypeScript",
      tool: "Visual Studio Code, GitHub, MongoDB, Render",
      libOrFramework: "React, Express, Bootstrap, EmailJS",
      description:
        "This website serves as my online portfolio, featuring some of my highlighted works. Users can explore the website's content, which incorporates interactive elements and a contact form for submissions. This project showcases my skills in developing a responsive ReactJS website connected to the MongoDB database, using EmailJS for form submission, and creating a visually appealing UI/UX design.",
      image: ["myPortfolioV2_.png", "myPortfolioV2_2.png"],
      published: true,
      displayLbl: true,
      labelContent: "MERN stack",
      link: "/",
      other: "4Individual project",
      skill:
        "Coding, database operations, UI/UX design, organizational & problem-solving skills",
      id: "65bfe3beaca9373451f1cd08",
    },
    {
      title: "Your Realtor",
      type: "Website",
      language: "HTML, CSS",
      tool: "Visual Studio Code, Developer tools",
      libOrFramework: "/",
      description:
        "In this individual project, I simulated the creation of a website for a realtor. Users can browse available properties and contact the agent if needed. I have included it in my portfolio to showcase not only my coding skills in building a website from scratch but also my ability to utilize Developer Tools to test the website for bugs and fix them accordingly.",
      image: ["realtor.png", "realtor2.png"],
      published: true,
      displayLbl: false,
      labelContent: "NA",
      link: "http://studentweb.cencol.ca/schan253/termproject/index.html",
      other: "5Individual project",
      skill: "Bug testing & tracking, debugging, coding, UI/UX design",
      id: "65bc64202ef504d20f125d48",
    },
    {
      title: "RGBuddy",
      type: "Web application",
      language: "HTML, CSS, JavaScript",
      tool: "Visual Studio Code, Firebase, GitHub, Render",
      libOrFramework: "React",
      description:
        "In this group project, our team developed an application aimed at individuals with amblyopia, focusing on anti-suppression vision training. The website simulates the launch of a Google Chrome plugin, featuring semi-transparent red and green bars that overlay the browser window. Users can customize the training start date, time, and duration, access eye health tips, submit feedback, and subscribe to updates. I have highlighted this project in my portfolio to showcase my skills in ReactJS, Firebase, HTML, CSS, and JavaScript.",
      image: ["rGBuddy.png", "rGBuddy2.png"],
      published: true,
      displayLbl: true,
      labelContent: "React",
      link: "https://rgbuddy.onrender.com/",
      other: "6Group project",
      skill: "Library integration, debugging, coding, UI/UX design, teamwork",
      id: "65bc651b2ef504d20f125d49",
    },
    {
      title: "Lightbox",
      type: "Website",
      language: "HTML, CSS, JavaScript",
      tool: "Visual Studio Code, Developer tools",
      libOrFramework: "jQuery",
      description:
        "In this individual school project, I simulated the creation of a website for an interior design company. The lightbox elegantly showcases their work, playing automatically with users retaining control through previous and next buttons. I have featured it in my portfolio to demonstrate my proficiency in using jQuery, JavaScript, HTML, and CSS  in web development.  ",
      image: ["lightBoxID.png", "lightBoxID2.png"],
      published: true,
      displayLbl: false,
      labelContent: "/",
      link: "http://studentweb.cencol.ca/schan253/comp125/assignment4/assignment4.html",
      other: "7Individual project",
      skill: "Library integration, debugging, coding, UI design",
      id: "65bc62e72ef504d20f125d47",
    },
    {
      title: "Interiors",
      type: "Website",
      language: "HTML",
      tool: "(I collaborated with an agency company and utilized their customized backend website and server)",
      libOrFramework: "/",
      description:
        "(*Note: Due to location limitations (currently not in Taiwan), there is an issue loading the language file. I apologize for any inconvenience, and you may only see the images if you are accessing the website from Canada.) This website underwent a redesign to rebrand the company, aiming to increase brand awareness and drive sales. Customers can now explore products and easily contact the company. As I had limited coding experience at that time, I collaborated with an agency to address marketing and design requirements. Additionally, I independently edited website content and images. This project showcases my skills in creating a visually appealing UI/UX design and effective project management.",
      image: ["shiyi.png", "shiyi2.png"],
      published: true,
      displayLbl: true,
      labelContent: "Design",
      link: "https://www.newshiyi.com.tw/",
      other: "8Workplace project",
      skill:
        "UI/UX design, marketing, simple coding, project management, organizational & problem-solving skills",
      id: "65bfea8faca9373451f1cd09",
    },
    {
      title: "Slideshow",
      type: "Website",
      language: "HTML, CSS, JavaScript",
      tool: "Visual Studio Code, Developer tools",
      libOrFramework: "/",
      description:
        "In this individual school project, I simulated the development of a slideshow for an interior design company. Users can easily control the slideshow with the play/stop button, add their favorite images, and remove them from the basket if they change their minds. I have showcased this project in my portfolio to highlight my proficiency in web development, specifically using JavaScript, HTML, and CSS.",
      image: ["slideshow.png", "slideshow2.png"],
      published: true,
      displayLbl: false,
      labelContent: "/",
      link: "http://studentweb.cencol.ca/schan253/comp125/assignment2/assignment2.html",
      other: "9Individual project",
      skill: "Debugging, coding, UI design",
      id: "65bff9c80a150eddc494443c",
    },
  ];

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

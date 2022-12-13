import React from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Forkify from "../assets/img/Forkify.jpg";
import Youtube from "../assets/img/Youtube_clone.jpg";
import FirstCMS from "../assets/img/First_CMS.jpg";
import Calculator_react from "../assets/img/Calculator_react.jpg";
import GuessNumber from "../assets/img/GuessNumber.jpg";
import Virtual_keyboard from "../assets/img/Virtual_keyboard.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Forkify",
      description: "App for searching recepies/hotels, also can add own recepies/hotels.",
      imgUrl: Forkify,
      gitLink: "https://github.com/AhmedMehmedovic/Forkify--RECIPES-",
    },
    {
      title: "Calculator",
      description: "Calculator made in React. (exercise)",
      imgUrl: Calculator_react,
      gitLink: "https://github.com/AhmedMehmedovic/React-web-dev-simplified-calculator",
    },
    {
      title: "Youtube_clone",
      description: "Exercise HTML,CSS,JS. Try to clone youtube design.",
      imgUrl: Youtube,
      gitLink: "https://github.com/AhmedMehmedovic/youtube_clone",
    },
    {
      title: "Basic CMS",
      description: "Exercise - One of the first trying make some app. ",
      imgUrl: FirstCMS,
      gitLink: "https://github.com/AhmedMehmedovic/Basic-CMS",
    },
    {
      title: "Guess Number",
      description: "From course exercise. Try to gess some random namber. Something like game.",
      imgUrl: GuessNumber,
      gitLink: "https://github.com/AhmedMehmedovic/Guess-my-number",
    },
    {
      title: "Virtual Keyboard",
      description: "Exercise. Virtual keyboard (HTML, CSS, JS) vanila",
      imgUrl: Virtual_keyboard,
      gitLink: "https://github.com/AhmedMehmedovic/Virtual_keyboard",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              These are projects for practicing the basics of (HTML,CSS, JS). All code is visible on my git account. I participated in the elaboration and
              development of a plan for some part of software in the company as well. This portfolio-website is also my project.<span role="img">😉</span>
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="navigation-pills mb-5 justify-content-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Web (HTML,CSS,JS)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Webflow</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item> */}
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">TEKST NEKI</Tab.Pane>
                <Tab.Pane eventKey="third">TEKST NEKI</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background-right"></img>
    </section>
  );
};

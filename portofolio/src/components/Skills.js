import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Html from "../assets/img/HTML.png";
import Css from "../assets/img/CSS.png";
import Js from "../assets/img/JS.png";
import Mysql from "../assets/img/MYSQL.png";
import Office from "../assets/img/OFFICE.png";
import React_img from "../assets/img/REACT.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Sint exercitation magna ullamco sit cupidatat aute enim culpa magna adipisicing eu officia et. <br></br>Et anim voluptate magna enim dolor Lorem
                commodo ad ipsum fugiat aliquip ipsum cillum. Incididunt anim esse esse ut.<br></br> Sunt qui sunt cillum non qui exercitation.
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={Html} alt="html" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={Css} alt="css" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={Js} alt="js" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={React_img} alt="react" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={Mysql} alt="mysql" />
                  <h5>MYSQL</h5>
                </div>
                <div className="item">
                  <img src={Office} alt="office" />
                  <h5>OFFICE</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left " src={colorSharp} alt="background-left" />
    </section>
  );
};

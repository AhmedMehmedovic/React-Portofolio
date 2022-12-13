import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={12} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://ba.linkedin.com/in/ahmed-mehmedovic-bb0b22125" rel="noopener noreferrer" target="_blank">
                <img alt="linkedin" src={navIcon1} />
              </a>
              <a href="https://github.com/AhmedMehmedovic" rel="noopener noreferrer" target="_blank">
                <img alt="github" src={navIcon3} />
              </a>
              <a href="https://www.facebook.com/hipmede/" rel="noopener noreferrer" target="_blank">
                <img alt="facebook" src={navIcon2} />
              </a>
            </div>
            <p>CopyRight {new Date().getFullYear()}. All right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

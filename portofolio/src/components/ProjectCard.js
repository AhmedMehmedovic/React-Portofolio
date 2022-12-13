import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitLink }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="pro" />

        <div className="proj-txtx">
          <a href={gitLink} rel="noopener noreferrer" target="_blank">
            <h4>{title}</h4>
          </a>

          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

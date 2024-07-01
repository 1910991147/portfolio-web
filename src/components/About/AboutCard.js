import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Vineet Vashist from </span>
            from <span className="purple"> Punjab, India.</span>
            <br />I am currently employed as a{" "}
            <span className="purple">Frontend Developer</span> and{" "}
            <span className="purple">UI/UX Designer</span> at Udyat
            Technologies.
            <br />I have completed <span className="purple">B.Tech</span> in
            Computer Science from <span className="purple">Chitkara
            University</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Streaming shows and movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import coucal from "../../Assets/Projects/124669.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import GolfStudy from "../../Assets/Projects/Golf_CaseStudy.png";
import Ecommerse from "../../Assets/download4.png";
import matrimonial from "../../Assets/Projects/img.jpg";
import suicide from "../../Assets/25726540_7127986.jpg";
import mobile_app from "../../Assets/Projects/MobiPay.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" style={{ marginTop: 3 }}>
            <ProjectCard
              imgPath={matrimonial}
              isBehance={true}
              title="Matrimonial Website"
              description="Designed and Developed a Matrimonial Website, in which I have used technologies like ReactJs and MUI library for UI development. I have used Figma for Designing the website"
              behanceLink="https://www.behance.net/gallery/200605725/Matrimonial-Website-UIUX-Design"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card" style={{ marginTop: -10 }}>
            <ProjectCard
              imgPath={mobile_app}
              isBehance={true}
              title="Mobile App Design"
              description="Design a mobile wallet app to make a transaction and see the stats of your total spending. You can also view your transaction history and total income/outcome "
              behanceLink="https://www.behance.net/gallery/178597449/MobiPay"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card" style={{ marginTop: -10 }}>
            <ProjectCard
              imgPath={GolfStudy}
              isBehance={true}
              title="SwingPro Case Study"
              description="This golf app UI/UX design focuses on intuitive score tracking, course navigation, and social features, enhancing the overall golfing experience.
"
              behanceLink="https://www.behance.net/gallery/178991775/SwingPro-UXUI-Case-Study"
              // demoLink="https://editor.soumya-jit.tech/"s
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coucal}
              // demoLink={true}
              title="Coucal AI"
              description="
              I have made the UI of this product and it's website in my previous company. Coucal is a revolutionary AI-powered recruitment tool that automates resume screening and skills assessment, promoting fairness, consistency, and diversity while saving time and resources for organizations."
              demoLink="https://www.coucal.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Website Redesigned"
              description="I've redesigned and developed the company website using HTML, CSS, and JavaScript. This project involved enhancing the user experience, improving the visual design, and ensuring responsive functionality across all devices, resulting in a more engaging and effective site."
              demoLink="https://udyattech.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card" style={{ marginTop: -12 }} >
          <ProjectCard
              
              imgPath={Ecommerse}
              isBehance={true}
              title="Ecommerce Website Design"
              description="Experience a vibrant ecommerce platform offering a diverse selection of clothes and shoes. Explore an array of colors with our intuitive sliding feature, ensuring you find the perfect style to suit your taste. Enjoy seamless browsing, exclusive deals, and delightful shopping experience.  
"
              behanceLink="https://www.behance.net/gallery/202152009/Ecommerce-Web-Design"
              // demoLink="https://editor.soumya-jit.tech/"s
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

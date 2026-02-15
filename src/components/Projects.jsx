import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";

export default function Projects(){
  return (
    <Row className="g-4 align-items-start">

      {projects.map((project) => (
          <Col md={4} key={project.id}>
          <ProjectCard {...project} />
        </Col>
      ))}

    </Row>
  );
}

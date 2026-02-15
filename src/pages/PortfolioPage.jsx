import { Container } from "react-bootstrap";
import Projects from "../components/Projects";

export default function PortfolioPage(){
  return (
    <Container className="mt-5 pb-15" style={{minHeight:"80vh"}}>

      <div className="text-center mb-5">
        <h1>Portfolio</h1>
        <p className="text-muted">
          Algunos de mis proyectos de desarrollo web y arte digital.
        </p>
      </div>

      <Projects />

    </Container>
  );
}

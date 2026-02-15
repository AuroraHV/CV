import { Container, Row, Col, Button, Badge, Card } from "react-bootstrap";

export default function LandingPage(){
  return (
    <>
      {/* HERO */}
      <div
        className="py-5 text-center border-bottom"
        style={{
          backgroundImage: "url('/fondo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container
          style={{
            background: "rgba(224, 219, 230, 0.93)",
            padding: "30px",
            borderRadius: "12px"
          }}
        >
          {/* FOTO */}
          <img
            src="/foto.PNG"
            alt="Foto Aurora"
            style={{
              width: "180px",
              borderRadius: "50%",
              border: "4px solid #7f95b9",
              marginBottom: "25px"
            }}
          />

          <h1 className="display-4 fw-bold mb-2" style={{color: "#000"}}>Aurora Haro Vicente</h1>

          <h4 className="text-muted mb-4" style={{color: "#6c757d"}}>
            Administración · Programación · Arte Digital
          </h4>

          <p className="lead mx-auto mb-4" style={{maxWidth:"750px", color: "#000"}}>
            Técnica Superior en Animaciones 3D y graduada en ADE con Máster en 
            Contabilidad y Finanzas. Actualmente estudiando Desarrollo de 
            Aplicaciones Web. Perfil híbrido entre programación, análisis de datos 
            y creatividad digital.
          </p>

          {/* BOTONES */}
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button variant="dark" href="https://github.com/AuroraHV" target="_blank">
              GitHub
            </Button>

            <Button variant="primary" href="https://www.linkedin.com/in/auroraharovicente/" target="_blank">
              LinkedIn
            </Button>

            <Button 
              className="btn-artstation"
              href="https://www.artstation.com/nordlysh" 
              target="_blank"
            >
              ArtStation
            </Button>

          </div>
        </Container>
      </div>

      <Container className="mt-5">

        {/* TECNOLOGÍAS DESTACADAS */}
        <Row className="text-center mb-5">
          <h2 className="mb-4">Tecnologías destacadas</h2>

          <Col>
            <Badge bg="secondary" className="p-3 m-2">JavaScript</Badge>
            <Badge bg="secondary" className="p-3 m-2">React</Badge>
            <Badge bg="secondary" className="p-3 m-2">MySQL</Badge>
            <Badge bg="secondary" className="p-3 m-2">Power BI</Badge>
            <Badge bg="secondary" className="p-3 m-2">Git</Badge>
            <Badge bg="secondary" className="p-3 m-2">Photoshop</Badge>
            <Badge bg="secondary" className="p-3 m-2">Blender</Badge>
          </Col>
        </Row>

        {/* TARJETAS HABILIDADES */}
        <Row className="g-4">

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="mb-3">💻 Desarrollo</Card.Title>
                <ul>
                  <li>IntelliJ IDEA & Visual Studio Code</li>
                  <li>HTML, CSS, JavaScript, PHP</li>
                  <li>React y Laravel</li>
                  <li>MySQL y SQL Server</li>
                  <li>Git & GitHub</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="mb-3">📊 Datos & Empresa</Card.Title>
                <ul>
                  <li>Power BI</li>
                  <li>a3ASESOR (contabilidad)</li>
                  <li>Finanzas corporativas</li>
                  <li>Marketing digital (SEO/SEM)</li>
                  <li>Community Manager</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="mb-3">🎨 Arte Digital</Card.Title>
                <ul>
                  <li>Photoshop, Premiere, After Effects</li>
                  <li>Substance Painter, Animate</li>
                  <li>Blender, 3D Max, Maya, ZBrush</li>
                  <li>Procreate</li>
                  <li>Unity</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        {/* IDIOMAS */}
        <Row className="mt-5 text-center pb-5">
          <Col>
            <h2>Idiomas</h2>
            <p className="lead mt-3">
              🇪🇸 Español nativo · 🇬🇧 Inglés B1 Cambridge
            </p>
          </Col>
        </Row>

      </Container>
    </>
  );
}

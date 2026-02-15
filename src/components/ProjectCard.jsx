import { Card, Button, Badge } from "react-bootstrap";
import { useState } from "react";

export default function ProjectCard({ title, description, image, link, tags }) {

  // Estado para mostrar / ocultar información
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Card className="h-100 shadow-sm project-card">

      {/* Imagen tamaño fijo */}
      <div className="card-img-wrapper">
        <Card.Img variant="top" src={image} />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>

        {/* Botón interactivo */}
        <Button
          variant="secondary"
          className="mb-3"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? "Ocultar info" : "Mostrar info"}
        </Button>

        {/* Contenido que aparece al hacer click */}
        {showInfo && (
          <>
            <Card.Text className="flex-grow-1">
              {description}
            </Card.Text>

            {/* Tags */}
            <div className="mb-3">
              {tags.map((tag, i) => (
                <Badge bg="secondary" key={i} className="me-1">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button variant="primary" href={link} target="_blank">
              Ver proyecto
            </Button>
          </>
        )}
      </Card.Body>

    </Card>
  );
}

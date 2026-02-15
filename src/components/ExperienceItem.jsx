import { Card } from "react-bootstrap";

// Representa una experiencia (trabajo, estudios)
export default function ExperienceItem({ role, place, dates, details }) {
  return (
    <Card className="mb-3">
      <Card.Body>

        <Card.Title>{role}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {place} — {dates}
        </Card.Subtitle>

        <Card.Text>{details}</Card.Text>

      </Card.Body>
    </Card>
  );
}

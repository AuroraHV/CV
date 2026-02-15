import Nav from "./Nav";
import { Navbar, Container } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Button } from "react-bootstrap";

export default function Header() {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Mi CV React</Navbar.Brand>

        <Nav />

        {/* Botón modo oscuro */}
        <Button variant="outline-light" onClick={toggleTheme}>
          Cambiar tema
        </Button>

      </Container>
    </Navbar>
  );
}

import { Nav as NavBootstrap } from "react-bootstrap";
// Importar Link de React Router para navegar sin recargar la página
import { Link } from "react-router-dom";


export default function Nav() {
  return (
    <NavBootstrap>
      <NavBootstrap.Link as={Link} to="/">Landing</NavBootstrap.Link>
      <NavBootstrap.Link as={Link} to="/portfolio">Portfolio</NavBootstrap.Link>
      <NavBootstrap.Link as={Link} to="/experience">Experience</NavBootstrap.Link>
    </NavBootstrap>
  );
}

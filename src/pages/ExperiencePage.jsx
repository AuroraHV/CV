import { Container } from "react-bootstrap";
import ExperienceItem from "../components/ExperienceItem";

export default function ExperiencePage(){
  return (
    <Container className="mt-5">

      <div className="text-center mb-5">
        <h1>Experiencia</h1>
        <p className="text-muted">Experiencia laboral y formación académica</p>
      </div>

      {/* EXPERIENCIA LABORAL */}
      <h2 className="mb-4">💼 Experiencia laboral</h2>

      <ExperienceItem
        role="Auxiliar Administrativa"
        place="SAT NaturFresh · Almería"
        dates="Mayo 2024 – Noviembre 2024"
        details="Etiquetado y trazabilidad de mercancía, control de stock, gestión de expediciones y coordinación con transportistas."
      />

      <ExperienceItem
        role="Auxiliar Contable y Fiscal"
        place="Desaflico S.L · Almería"
        dates="Marzo 2022 – Febrero 2023"
        details="Atención y seguimiento de clientes, contabilidad de facturas, impuestos y conciliación bancaria."
      />

      <ExperienceItem
        role="Concept Artist y Edición de Vídeo (Prácticas)"
        place="Hellbug Studio S.L"
        dates="Octubre 2022 – Enero 2023"
        details="Creación de ilustraciones, escenarios y props para modelado 3D y edición de vídeo."
      />

      <ExperienceItem
        role="Auxiliar Administrativa"
        place="Vialterra Infraestructuras S.A · Almería"
        dates="2019 – 2020"
        details="Gestión de documentación, atención a clientes y proveedores y control de datos."
      />

      <ExperienceItem
        role="Administrativa (Prácticas)"
        place="Gesco Asesoría de Empresas S.L · Almería"
        dates="2016 – 2017"
        details="Archivo documental y gestión de trámites con administraciones públicas."
      />

      {/* FORMACIÓN */}
      <h2 className="mt-5 mb-4">🎓 Formación académica</h2>

      <ExperienceItem
        role="Técnico Superior en Desarrollo de Aplicaciones Web"
        place="IES Al-Ándalus"
        dates="2023 – Actualidad"
        details="Formación en desarrollo web: JavaScript, React, Node y bases de datos."
      />

      <ExperienceItem
        role="T.S. Animaciones 3D, Juegos y Entornos Interactivos"
        place="CEV Madrid"
        dates="2023"
        details="Modelado 3D, animación, diseño de videojuegos y entornos interactivos."
      />

      <ExperienceItem
        role="Máster en Contabilidad y Finanzas Corporativas"
        place="Universidad de Almería"
        dates="2020"
        details="Contabilidad avanzada, finanzas corporativas y análisis empresarial."
      />

      <ExperienceItem
        role="Grado en Administración y Dirección de Empresas"
        place="Universidad de Almería"
        dates="2017"
        details="Gestión empresarial, marketing, economía y organización de empresas."
      />

      {/* FORMACIÓN COMPLEMENTARIA */}
      <h2 className="mt-5 mb-4">📚 Formación complementaria</h2>

      <ExperienceItem
        role="Power BI: de cero a experto"
        place="Cuberty · Almería"
        dates="2025"
        details="Análisis de datos y visualización con Power BI."
      />

      <ExperienceItem
        role="Posicionamiento web y marketing digital"
        place="Ruano Formación"
        dates="2024"
        details="SEO, SEM y estrategias de marketing digital."
      />

      <ExperienceItem
        role="Community Manager y analítica"
        place="Escuela de Formación Profesional"
        dates="2019"
        details="Gestión de redes sociales, herramientas analíticas e informes."
      />

    </Container>
  );
}

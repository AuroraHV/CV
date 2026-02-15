// ==============================
// IMPORTS
// ==============================

// React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Páginas
import LandingPage from "./pages/LandingPage";
import PortfolioPage from "./pages/PortfolioPage";
import ExperiencePage from "./pages/ExperiencePage";


// ==============================
// APP PRINCIPAL
// ==============================
function App() {
  return (
    <BrowserRouter>

      <div className="app-wrapper">

        <Header />

        <main className="app-content">
          <Routes>

            {/* / → Landing */}
            <Route path="/" element={<LandingPage />} />

            {/* /portfolio → Portfolio */}
            <Route path="/portfolio" element={<PortfolioPage />} />

            {/* /experience → Experience */}
            <Route path="/experience" element={<ExperiencePage />} />

            {/* Ruta desconocida → redirige a / */}
            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;

// Import creatRoot and BrowserRouter from react-dom/client and react-router-dom.
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import bootstrap.min.css and index.css.
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// Import App, About, Portfolio, Contact, Resume, and NotFound components.
import App from "./App";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
// Render the App component inside the Router component.
createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<About />} />
        <Route path="About" element={<About />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

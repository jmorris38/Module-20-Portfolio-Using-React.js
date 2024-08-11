// Import Link from react-router-dom.
import { Link, useLocation } from "react-router-dom";
// Export the NavTabs component.
export default function NavTabs({ handlePageChange }) {
  const location = useLocation();
  return (
    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
      <li className="nav-item">
        {/* Add a Link component to set the href to "/About" */}
        <Link
          to="/About"
          className={
            location.pathname === "/About"
              ? "nav-link active text-secondary"
              : "nav-link text-white"
          }
          onClick={() => handlePageChange("About")}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        {/* Add a Link component to set the href to "/Portfolio" */}
        <Link
          to="/Portfolio"
          className={
            location.pathname === "/Portfolio"
              ? "nav-link active text-secondary"
              : "nav-link text-white"
          }
          onClick={() => handlePageChange("Portfolio")}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        {/* Add a Link component to set the href to "/Contact" */}
        <Link
          to="/Contact"
          className={
            location.pathname === "/Contact"
              ? "nav-link active text-secondary"
              : "nav-link text-white"
          }
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        {/* Add a Link component to set the href to "/Resume" */}
        <Link
          to="/Resume"
          className={
            location.pathname === "/Resume"
              ? "nav-link active text-secondary"
              : "nav-link text-white"
          }
          onClick={() => handlePageChange("Resume")}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

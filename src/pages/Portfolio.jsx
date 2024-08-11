// Import the Projects component to display the projects on the Portfolio page.
import Projects from "../components/Projects.jsx";
// Export the Portfolio component to the router in main.jsx.
export default function Portfolio() {
  return (
    <div className="container py-5">
      <Projects />
    </div>
  );
}

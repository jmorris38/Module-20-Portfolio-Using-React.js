// Import projectsData from projectData.jsx.
import projectsData from "../components/UI/projectData.jsx";
// Import the Projects.css file for styles.
import "../Styles/Projects.css";
// Create and export the Projects component to display the projects on the Portfolio page.
export default function Projects() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        {projectsData.map((project, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card card-custom">
              <div className="project-image-container">
                <img
                  src={project.image}
                  className="project-image"
                  alt={project.title}
                />
              </div>
              <div className="card-img-overlay">
                <h2 className="card-title">{project.title}</h2>
                <a href={project.repoLink} className="btn btn-custom">
                  Repo
                </a>
                <a href={project.liveLink} className="btn btn-custom">
                  Live
                </a>
              </div>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <a href={project.repoLink} className="btn btn-custom mr-2 mb-2">
                  Repo
                </a>
                <a href={project.liveLink} className="btn btn-custom ml-2 mb-2">
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

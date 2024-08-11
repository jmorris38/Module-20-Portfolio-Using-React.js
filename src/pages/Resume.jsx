// Import the styles from resume.css.
import "../Styles/Resume.css";
// Import the Skills and PDFComp components.
import Skills from "../components/Skills";
// import PDFComponent from "../components/PDFComp.jsx";
// Export the Resume component to the router in main.jsx.
export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-download">
        <a
          href="/JustinMorrisResume.pdf"
          download="JustinMorrisResume.pdf"
          className="resume-link"
        >
          Download Resume
        </a>
      </div>
      {/* <Skills /> */}
    </div>
  );
}

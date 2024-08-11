// Import the styles from App.css.
import "../Styles/NotFound.css";
// Export the NotFound function for the app to display the 404 page when the user navigates to a page that does not exist.
export default function NotFound() {
  return (
    <div className="NotFoundContainer">
      <h1 className="Title">404 Page Not Found</h1>
      <p className="SubTitle">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/About" className="BackButton">
        Back
      </a>
    </div>
  );
}

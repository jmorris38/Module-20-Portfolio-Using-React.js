// Import social icons from react-social-icons.
import { SocialIcon } from "react-social-icons";
// Export the Footer component.
export default function Footer() {
  return (
    <footer id="footer">
      <div className="col col1">
        <div className="social">
          <SocialIcon
            url="https://linkedin.com/in/jmorris38"
            network="linkedin"
          />
          <SocialIcon url="https://github.com/jmorris38" network="github" />
        </div>
        <p>
          2024. All Rights Reserved to Justin Morris 
        </p>
      </div>
    </footer>
  );
}
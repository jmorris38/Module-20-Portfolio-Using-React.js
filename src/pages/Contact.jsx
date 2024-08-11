// Import the useState hook from React.
import { useState } from "react";
// Import the Contact.css file.
import "../Styles/Contact.css";
// Import the EmailForm component.
import EmailForm from "../components/EmailForm";
// Export the Contact component to the router in main.jsx.
export default function Contact() {
  // Declare a variable formData and a function setFormData with the useState hook.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Return the JSX for the Contact component.
  return (
    <div className="contact-container text-center">
      <EmailForm formData={formData} setFormData={setFormData} />
    </div>
  );
}

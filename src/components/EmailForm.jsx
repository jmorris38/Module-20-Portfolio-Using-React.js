// Import useState hook from React.
import { useState } from "react";
// Import emailjs from emailjs-com.
import emailjs from "@emailjs/browser";
// Import validateEmail from helpers.
import { validateEmail } from "../utils/helpers";
// Import Modal component.
import Modal from "../components/Modal";
// Create and export the EmailForm component.
const EmailForm = ({ formData, setFormData }) => {
  // Create state variables for error messages and modal.
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Create state variables for modal message and open/close.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  // Create functions to handle input change, blur, and form submit.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the specific field error when it changes.
    setErrorMessages({
      ...errorMessages,
      [name]: "",
    });
  };
  // Create a function to handle input blur.
  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";
    // Validate the field based on the name.
    if (value.trim() === "") {
      errorMessage = "This field is required";
    } else if (name === "email" && !validateEmail(value)) {
      errorMessage = "Invalid email address";
    }
    // Set the error message for the field.
    setErrorMessages({
      ...errorMessages,
      [name]: errorMessage,
    });
  };
  // Create a function to handle form submission.
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let newErrorMessages = {};
    let hasError = false;

    // Validate each field.
    if (!formData.name.trim()) {
      newErrorMessages.name = "Name is required";
      hasError = true;
    }
    if (!validateEmail(formData.email)) {
      newErrorMessages.email = "Invalid email address";
      hasError = true;
    }
    if (!formData.message.trim()) {
      newErrorMessages.message = "Message is required";
      hasError = true;
    }
    // Set the error messages and return if there is an error.
    if (hasError) {
      setErrorMessages(newErrorMessages);
      return;
    }
    // Set up the emailjs parameters.
    const serviceId = "service_gewmj8o";
    const templateId = "template_15y9tlk";
    const publicKey = "4nJKhzG30rj7k3Fhn";
    // Setup the email template parameters.
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Justin Morris",
      message: formData.message,
    };
    // Send the email using emailjs.
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);

        // Set the modal message and open the modal.
        setModalMessage(
          `Hello ${
            formData.name || "Friend"
          }, I will reach out as soon as possible!`
        );
        setIsModalOpen(true);
        // Clear form data after a short delay.
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        }, 500); // Adjust delay as needed.
      })
      .catch((error) => {
        console.error("There was an error sending the email:", error);
        console.log("Error details:", error.response);
      });
  };
  // Return the JSX for the EmailForm component.
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message={modalMessage}
      />
      <h1>Hello {formData.name || "Friend"}!</h1>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <input
          className="contact-input"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          // Add onChange and onBlur event handlers.
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        {errorMessages.name && (
          <p className="error-text">{errorMessages.name}</p>
        )}

        <input
          className="contact-input"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        {errorMessages.email && (
          <p className="error-text">{errorMessages.email}</p>
        )}

        <textarea
          className="contact-textarea"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          rows="5"
        />
        {errorMessages.message && (
          <p className="error-text">{errorMessages.message}</p>
        )}

        <button className="contact-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default EmailForm;

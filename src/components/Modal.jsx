// Import Modal.css for styles.
import "../Styles/Modal.css";
// Create a Modal component to display messages to the user.
const Modal = ({ isOpen, onClose, message }) => {
  // If the Modal is not open, return null.
  if (!isOpen) return null;
// Return the JSX for the Modal component.
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button className="modal-button" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};
// Export the Modal component.
export default Modal;

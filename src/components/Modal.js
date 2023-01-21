import { ReactDOM } from "react";
import "./Modal.css";
// import '../App.css';

function Modal({ children, handleClose }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;

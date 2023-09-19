import React from 'react';

const Modal = ({ isOpen, onClose, message }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;

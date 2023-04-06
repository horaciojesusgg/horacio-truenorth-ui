import React from 'react';

type AlertProps = {
    message: string;
    onClose: () => void;
    isOpen: boolean;
  };
const Alert = ({ message, onClose, isOpen }: AlertProps) => {
    if (!isOpen) {
        return null;
      }
    
      return (
        <div className="alert-overlay">
        <div className="alert">
          <div className="alert-message">{message}</div>
          <button className="alert-close-button" onClick={onClose}>Close</button>
        </div>
      </div>
      );
}

export default Alert;
import axios from 'axios';
import AxiosInstance from 'context/AxiosInstance';
import React from 'react';

type AlertProps = {
    recordId: string;
    onClose: () => void;
    isOpen: boolean;
  };
const DeleteRecordModal = ({ recordId, onClose, isOpen }: AlertProps) => {

    const deleteRecordHandle = () => {
        AxiosInstance.delete('/record', {
            data: {
                recordId
            }
        }).then(() => {
            onClose()
        })
    }

    if (!isOpen) {
        return null;
      }
    
      return (
        <div className="alert-overlay">
        <div className="alert">
          <div className="alert-message">Deleting a record will not restore any spent balance, would you like to proceed?</div>
          <button className="alert-close-button mr-10" onClick={onClose}>Close</button>
          <button className="alert-primary-button" onClick={deleteRecordHandle}>Delete</button>
        </div>
      </div>
      );
}

export default DeleteRecordModal;
// LightboxModal.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const LightboxModal = ({ show, images, currentIndex, onClose, onNext, onPrev }) => {
  if (!images.length) return null; // Ensure there are images

  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Body style={{ padding: 0, position: 'relative', backgroundColor: 'rgba(4, 14, 24)' }}>
        <img src={images[currentIndex]} alt="project" style={{ width: '100%', maxHeight: '80vh' , objectFit: 'contain' }} />
        <Button 
          variant="secondary" 
          onClick={onPrev} 
          style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(173, 7, 49)' }}
        >
          Prev
        </Button>
        <Button 
          variant="secondary" 
          onClick={onNext} 
          style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(173, 7, 49)' }}
        >
          Next
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default LightboxModal;

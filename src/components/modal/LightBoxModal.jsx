// LightboxModal.jsx
import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const LightboxModal = ({ show, images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    if (!show) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowRight') {
        onNext();
      }
      if (event.key === 'ArrowLeft') {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [show, onClose, onNext, onPrev]);

  if (!images.length) return null; // Ensure there are images

  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Image viewer</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: 0, position: 'relative', backgroundColor: 'rgba(4, 14, 24)' }}>
        <img src={images[currentIndex]} alt="project" style={{ width: '100%', maxHeight: '80vh' , objectFit: 'contain' }} />
        <Button 
          variant="secondary" 
          onClick={onPrev} 
          aria-label="Previous image"
          style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(173, 7, 49)' }}
        >
          Prev
        </Button>
        <Button 
          variant="secondary" 
          onClick={onNext} 
          aria-label="Next image"
          style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(173, 7, 49)' }}
        >
          Next
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default LightboxModal;

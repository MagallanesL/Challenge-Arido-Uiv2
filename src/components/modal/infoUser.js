import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Informacion
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>aca props de usuario</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

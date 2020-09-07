import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const EditModal = (props) => {
  const { className, todo, EditTodo } = props;

  const [modal, setModal] = useState(false);
  const [editedText, setEditedText] = useState("");
  const save = () => {
    EditTodo(todo.id, editedText);
    setModal(false);
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={save}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Exit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditModal;

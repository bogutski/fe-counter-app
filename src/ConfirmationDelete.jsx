import React, { useState } from 'react';
import {
  Button,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from 'reactstrap';

export default function ConfirmationDelete(props) {
  const [isDisabledDeleteConfirmationButton, setIsDisabledDeleteConfirmationButton] = useState(true);

  const modalConfirmationUserInputChange = (e) => {
    const inputText = e.target.value;
    setIsDisabledDeleteConfirmationButton(inputText.trim().toLowerCase() !== props.name.trim().toLowerCase());
  };

  const deleteButtonClick = () => {
    setIsDisabledDeleteConfirmationButton(true);
    props.onSuccess();

  };

  const cancelButtonClick = () => {
    setIsDisabledDeleteConfirmationButton(true);
    props.onCancel();
  };

  return (
    <Modal isOpen={Boolean(props.name)} toggle={props.onCancel}>
      <ModalHeader>Delete confirmation</ModalHeader>

      <ModalBody>

        <p>
          Enter counter name <strong>{props.name}</strong> to
          delete it
        </p>

        <FormGroup>
          <Input type="email"
                 name="email"
                 id="exampleEmail"
                 placeholder="with a placeholder"
                 onChange={modalConfirmationUserInputChange}

          />
        </FormGroup>
      </ModalBody>

      <ModalFooter>
        <Button color="danger"
                onClick={deleteButtonClick}
                disabled={isDisabledDeleteConfirmationButton}>Delete</Button>

        <Button color="secondary"
                onClick={cancelButtonClick}>Cancel</Button>
      </ModalFooter>
    </Modal>);
}

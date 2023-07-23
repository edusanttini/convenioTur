import { useState } from 'react';
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from 'mdb-react-ui-kit';


function Example() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <MDBBtn onClick={toggleModal}>Open Modal</MDBBtn>
      <MDBModal show={showModal} onHide={toggleModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              Modal Title
            </MDBModalHeader>
            <MDBModalBody>
              Modal Content
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleModal}>Close</MDBBtn>
              <MDBBtn color="primary">Save Changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default Example;
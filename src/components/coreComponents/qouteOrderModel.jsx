import React from 'react';
import {Button,Form }from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export default class MainHeaders extends React.Component {
render(props) {
  console.log(props);
  const myCloseBtn=document.querySelectorAll(".modal-header button");
  console.log(myCloseBtn);
  return (
    <>
      <Modal {...this.props}>
        <Modal.Header>
          <Modal.Title>Book Your Order</Modal.Title>
          <Button variant="btn btn-close fa fa-close" onClick={this.props.onHide}></Button>
        </Modal.Header>

        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Control type="tel" placeholder="Mobile" />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Upload Your Pictures</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicShort">
      <Form.Control  as="textarea" rows={3}/>
        </Form.Group>
      
    </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary"  onClick={this.props.onHide}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
    </Modal>
        </>
        
  );
}
}

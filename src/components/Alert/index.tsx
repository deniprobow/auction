import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function BootAlert(props:any){
    return(
        <Modal show={props.show} onHide={()=>props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <p>{props.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{props.handleClose()}}>
            Cancel
          </Button>
          <Button variant="success" onClick={()=>{props.clickParent()}}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
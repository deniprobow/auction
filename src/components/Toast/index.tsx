import React from "react";
import { ToastBody } from "react-bootstrap";
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function Toast(props:any){
    return(
        <ToastContainer className="p-3" position="top-center">
          <Toast show={props.show} onClose={()=>props.handleClose()}>
            <ToastBody>{props.message}</ToastBody>
          </Toast>
        </ToastContainer>
    )
}
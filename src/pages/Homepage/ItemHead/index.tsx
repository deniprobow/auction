
import { Button,Card,Form, FormGroup,Stack,Container, Nav, Table, Row, Col, Modal } from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import { useState } from 'react';


interface ChildProps{
    getItems : Function
}

function ItemList(props:ChildProps) {


  return (
    <Nav variant="pills" activeKey="1" className="mb-4">
        <Nav.Item>
            <Nav.Link eventKey="1"  onClick={props.getItems('ongoing')}>
                OnGoing
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="2" title="Item"  onClick={props.getItems('completed')}>
            Completed
            </Nav.Link>
        </Nav.Item>
    </Nav> 
    
  );
}

export default ItemList;    
  
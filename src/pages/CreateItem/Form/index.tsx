import React, {Component, useState} from "react";
import './index.css';
import { Alert, Button,Card,Form, FormGroup,Stack } from "react-bootstrap";
import { NavLink,Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { login } from "../../../redux/loginSlice";
import 'whatwg-fetch';
import bidService from "../../../services/bidService";
import Confirmation from "../../../components/Confirmation";




export default function FormCreateItem(){

    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState(0);
    const [itemDuration, setItemDuration] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setVariant] = useState('danger');
    const [showModal, setShowModal] = useState(false);
    const [showError, setShowError] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [message, setMessage] = useState('Please input bigger amount.');
    const [messageModal, setMessageModal] = useState('Are you sure want to input new item?');
    const handleShowModal = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleError = () => setShowError(false);
    const isLogin = useSelector((state:any)=>state.login.isLogin);
    const user = useSelector((state:any)=>state.login.user);

    function addItem(){

        var body:any = {"item_name": itemName, "default_price": itemPrice, "current_price":itemPrice,"duration" : itemDuration};
            
            
        const fetchData = async() =>{
            await bidService.addItem(body).then((res:any)=> {
                console.log("res::"+res)
                if(res.status=='success'){
                    console.log("status::"+res.status);
                    setMessage(res.message);
                    setVariant('success');
                    setShowAlert(true);
                    setItemName('');
                    setItemPrice(0);
                    setItemDuration(0);
                    navigate('/createitem', { replace: true });
                }
                else{
                    console.log("status::"+res.status);
                    setMessage(res.message);
                    setVariant('danger');
                    setShowAlert(true);

                }
            })
            .catch((err)=> console.log(err));
         } 

         fetchData();
        

    
    }

    function goBack(){
        navigate('/homepage');
    }

    const onChangeItemName = (e:any)=>{
        var value = e.target.value; //currentprice
        setItemName(value);
    }

    const onChangeItemPrice = (e:any)=>{
        var value = e.target.value; //currentprice
        setItemPrice(value);
    }

    const onChangeItemDuration = (e:any)=>{
        var value = e.target.value; //currentprice
        setItemDuration(value);
    }

        return(
            <div>
                <div className="login-box">
                    <Card>
                    <Card.Body>
                        <h1>Create New Item</h1>
                        <Alert show={showAlert} variant={alertVariant}>
                                {message}
                        </Alert>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={itemName}  onChange={onChangeItemName} placeholder="Enter Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Start Price</Form.Label>
                                <Form.Control type="number" value={itemPrice}  onChange={onChangeItemPrice} placeholder="Enter Start Price" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Time Window</Form.Label>
                                <Form.Control type="number" value={itemDuration} onChange={onChangeItemDuration} placeholder="Enter Time Window" required />
                            </Form.Group>
                            <Stack direction="horizontal" gap={3} className="text-end" >
                                <Button variant="light" onClick={goBack} className="mt-3 mr-3">Cancel</Button> 
                                <Button variant="success" disabled={!itemName || itemPrice<=0 || itemDuration<=0} onClick={()=>{setShowModal(true)}} className="mt-3">Create</Button> 
                            </Stack>
                        </Form>
                    </Card.Body>
                    </Card>
                </div>
                <Confirmation show={showModal} isShowing={showModal} title="Confirmation Create Item" message={messageModal} handleClose={handleClose} clickParent={addItem} />
            </div>
        )    
    
}
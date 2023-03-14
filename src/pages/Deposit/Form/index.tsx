import React, {Component, useState} from "react";
import './index.css';
import { Alert, Button,Card,Form, FormGroup,Stack } from "react-bootstrap";
import { NavLink,Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { login,logout } from "../../../redux/loginSlice";
import 'whatwg-fetch';
import userService from "../../../services/userService";
import Confirmation from "../../../components/Confirmation";




export default function DepositForm(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [amount, setAmount] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setVariant] = useState('danger');
    const [showModal, setShowModal] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [message, setMessage] = useState('Please input bigger amount.');
    const [messageModal, setMessageModal] = useState('Are you sure want to deposit?');
    const handleShowModal = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    
    const isLogin = useSelector((state:any)=>state.login.isLogin);
    const user = useSelector((state:any)=>state.login.user);


    const onChangeDeposit = (e:any)=>{
        var value = e.target.value; //currentprice
        if(value<=0){
            setMessage('Please input bigger price!');
            setShowAlert(true);
            setDisabled(true);
        }
        else{
            setShowAlert(false);
            setDisabled(false);
            setAmount(value);
        }
    }
    function addDeposit(){

        var id:string = user.id;
        
        const fetchData = async() =>{
            await userService.addDeposito(id,amount).then((res:any)=> {
                console.log("res::"+res)
                if(res.status=='success'){
                    console.log("status::"+res.status);
                    setMessage(res.message);
                    setVariant('success');
                    setShowAlert(true);
                    let newBalance:number = parseInt(user.balance) + +amount;
                    let userNew = {"id":user.id,"username":user.username,"name":user.name,"balance":newBalance};
                    console.log(userNew);
                    dispatch(login(userNew));
                    navigate('/deposit', { replace: true });
                }
                else{
                    console.log("status::"+res.status);
                    setMessage(res.message);
                    setShowAlert(true);
                    setVariant('success');
                }
            })
            .catch((err)=> console.log(err));
         } 

         fetchData();
        

    
    }

    function goBack(){
        navigate('/homepage');
    }

        return(
            <div>
                <div className="login-box">
                    <Card>
                    <Card.Body>
                        <h1>Deposit</h1>
                        <Form>

                            <Alert show={showAlert} variant={alertVariant}>
                                {message}
                            </Alert>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" readOnly={true} placeholder="Enter Username" value={user.username} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCurBalance">
                                <Form.Label>Current Balance</Form.Label>
                                <Form.Control type="text" readOnly={true} placeholder="Enter Username" value={user.balance} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAmount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="number"  onChange={onChangeDeposit} placeholder="Enter Amount" onKeyUp={(event:any) => { if (!/[0-9],./.test(event.key)) {event.preventDefault();}}} />
                            </Form.Group>
                            <Stack direction="horizontal" gap={3} className="text-end" >
                                <Button variant="light" onClick={goBack} className="mt-3 mr-3">Cancel</Button> 
                                <Button variant="success" disabled={disabled} onClick={()=>{setShowModal(true);console.log("showmodal::"+showModal)}} className="mt-3">Deposit</Button> 
                            </Stack>
                        </Form>
                    </Card.Body>
                    </Card>
                </div>
                <Confirmation show={showModal} isShowing={showModal} title="Confirmation Deposit" message={messageModal} handleClose={handleClose} clickParent={addDeposit} />
            </div>
        )    
    
}
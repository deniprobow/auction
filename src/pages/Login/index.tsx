import React, {Component, useEffect, useState} from "react";
import './index.css';
import { Button,Card,Form, FormGroup,Stack } from "react-bootstrap";
import { NavLink,Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { login,logout } from "../../redux/loginSlice";
import 'whatwg-fetch';
import userService from "../../services/userService";
import BootAlert from "../../components/Alert";




export default function Login(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showWarning, setShowWarning] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [pathNext, setPathNext] = useState('homepage');
    const [redirect, setRedirect] = useState(false);
    const [titleModal, setTitleModal] = useState('Error');
    const [messageModal, setMessageModal] = useState('Error!');
    const handleWarningClose = () => setShowWarning(false);
    const isLogin = useSelector((state:any)=>state.login.isLogin);
    const user = useSelector((state:any)=>state.login.user);

    if(isLogin){
        navigate('/homepage', { replace: true });
    }

    const onChangeUsername = (e:any)=>{
        var value = e.target.value; //currentprice
        setUsername(value);
    }

    const onChangePassword = (e:any)=>{
        var value = e.target.value; //currentprice
        setPassword(value);
    }
    const goNext = () => {
        if(pathNext==='homepage')
        navigate('/homepage')
        else    
        {navigate('/');setShowWarning(false)}
    };

    useEffect(() => {
        if(redirect){
            setTimeout(() => { 
                navigate('/homepage', { replace: true });
            }, 3000)
        }
        
    },)
    
    async function doLogin(){
    
        await userService.login(username,password).then((res:any)=> {
            console.log("message::"+res);
            if(res.message=='Unauthorized'){
                setTitleModal('Register Failed');
                setMessageModal('Error, Please check your username/password!');
                setShowWarning(true);
                setPathNext('login');
            }
            else{
                dispatch(login(res));
                setTitleModal('Register Successfully');
                setMessageModal('Success, you will be redirecting to homepage!');
                setShowWarning(true);
                setRedirect(true);
                setPathNext('home');
            }
        })
        .catch((err)=> console.log(err));
    
    }

        return(
            <div>
                <div className="login-box">
                    <Card>
                    <Card.Body>
                        <h1>Login</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" onChange={onChangeUsername} placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={onChangePassword} placeholder="Enter Password" />
                            </Form.Group>
                            <Stack className="text-end" >
                                <Button variant="success" onClick={doLogin} className="mt-3">Login Now</Button> 
                                <NavLink className="text-link mt-3" to="/Register">Don't Have an Account? Register Here.</NavLink>
                            </Stack>
                        </Form>
                    </Card.Body>
                    </Card>
                </div>
                <BootAlert show={showWarning} isShowing={showWarning} title={titleModal} message={messageModal} handleClose={handleWarningClose} clickParent={goNext} />

            </div>
        )    
    
}
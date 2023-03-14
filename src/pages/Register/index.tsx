import React, {Component, useState} from "react";
import './index.css';
import { Button,Card,Form, FormGroup,Stack } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/loginSlice";
import BootAlert from "../../components/Alert";
import userService from "../../services/userService";

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showWarning, setShowWarning] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [pathNext, setPathNext] = useState('login');
    const [titleModal, setTitleModal] = useState('Error');
    const [messageModal, setMessageModal] = useState('Error!');
    const handleWarningClose = () => setShowWarning(false);
    const goNext = () => {
        if(pathNext==='login')
        navigate('/')
        else    
        {navigate('/register');setShowWarning(false)}
    };
    const isLogin = useSelector((state:any)=>state.login.isLogin);
    const user = useSelector((state:any)=>state.login.user);

    const onChangeUsername = (e:any)=>{
        var value = e.target.value; //currentprice
        setUsername(value);
    }

    const onChangePassword = (e:any)=>{
        var value = e.target.value; //currentprice
        setPassword(value);
    }

    async function doRegister(){
    
        await userService.register(username,password).then((res:any)=> {
            console.log("message::"+res.message);
            if(res.status=='success'){
                setTitleModal('Register Successfully');
                setMessageModal('Success, your account has been registered successfully!');
                setShowWarning(true);
                setPathNext('login');
            }
            else{

                setTitleModal('Register Failed');
                setMessageModal('Error, your account has been failed registered! Please check your internet connection');
                setShowWarning(true);
                setPathNext('register');

            }
        })
        .catch((err)=> console.log(err));
    
    }
    return(
            <div>
                <div className="login-box">
                    <Card>
                    <Card.Body>
                        <h1>Register</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" onChange={onChangeUsername}  placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={onChangePassword} placeholder="Enter Password" />
                            </Form.Group>
                            <Stack className="text-end" gap={3}>
                                <Button variant="success" onClick={doRegister} className="mt-3">Register</Button>
                                <NavLink className="text-link" to="/">Have an account? Login here</NavLink>
                            </Stack>
                        </Form>
                    </Card.Body>
                    </Card>
                </div>
                <BootAlert show={showWarning} isShowing={showWarning} title={titleModal} message={messageModal} handleClose={handleWarningClose} clickParent={goNext} />
    
            </div>
        )    
    
}
import Container from 'react-bootstrap/Container';
import Header from '../Header';
import Content from '../Content';
import {useSelector, useDispatch} from "react-redux";
import { login,logout } from "../../redux/loginSlice";
import { createBrowserRouter, RouterProvider,BrowserRouter as Router,
  Route, } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
import CreateItem from '../../pages/CreateItem/Form';
import Deposit from '../../pages/Deposit/Form';

function Wrapper() {
 
  
  return (
    <div>
    </div>
   
  );
}

export default Wrapper;
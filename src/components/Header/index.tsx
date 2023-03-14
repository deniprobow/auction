import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { login,logout } from "../../redux/loginSlice";

function Header(props:any) {

  const user = useSelector((state:any)=>state.login.user);
  const isLogin = useSelector((state:any)=>state.login.isLogin);
  console.log("user::"+isLogin)
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Text className="ms-auto mr-3">
            Balance <strong> {parseInt(user.balance)}$</strong>
        </Navbar.Text>
        <Dropdown className='ml-4'>
            <Dropdown.Toggle variant='light' id="dropdown-basic">
                <FaUser />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
                <Dropdown.Item as={Link} to="/createitem">Create New Item</Dropdown.Item>
                <Dropdown.Item as={Link} to="/deposit">Deposit</Dropdown.Item>
                <Dropdown.Item as={Link} to="/">Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
    
    
  );
}

export default Header;
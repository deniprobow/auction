import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import {FaUser} from 'react-icons/fa';
import { Button,Card,Form, FormGroup,Stack,Container, Nav, Table, Row, Col, Modal, Alert } from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from 'react';
import { lastBid, setBid } from "../../../redux/bidSlice";
import moment from 'moment';
import bidService from '../../../services/bidService';
import Countdown from '../../../components/Countdown';
import Text from '../../../components/Text';
import BootAlert from '../../../components/Alert';

interface ChildProps{
    getItems : Function
}

function ItemList(props:any) {

    const [disabled, setDisabled] = useState(true);
    const [showBid, setShowBid] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [message, setMessage] = useState('Please wait more seconds after your last bid.');
    const [itemId, setItemId] = useState('0');
    const [itemPrice, setItemPrice] = useState('0');
    const [bidPrice, setBidPrice] = useState('0');
    const [datas, setDatas] = useState([]);
    const [activeKey, setActiveKey] = useState(1);
    const lastBid = useSelector((state:any)=>state.bid.lastBidDate);
    const user = useSelector((state:any)=>state.login.user);
    const bids = useSelector((state:any)=>state.bid.bids);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goDeposit = () => navigate('/deposit');
    const handleClose = () => setShowBid(false);
    const handleWarningClose = () => setShowWarning(false);
    const handleShowBid = (id:string, currentPrice:string, is_bidding:string) =>(event:any)=> {
            var bal:number = parseInt(user.balance);
            let price : number = parseInt(currentPrice);
            if(bal<=price){
                setShowWarning(true);
            }
            else{
                setItemId(id);
                setItemPrice(currentPrice);
                setShowBid(true);
            }
            
        
        
        // alert(itemId);
    };
    const handleShowAlert = () => setShowAlert(true);
   
    useEffect(() => {
         
         fetchData('ongoing');
    }, []);

    const fetchData = async(status:any) =>{
        await bidService.getItemList(status).then((res:any)=> {
            console.log("res::"+res)
            setDatas(res);
        })
        .catch((err)=> console.log(err));
     } 

    const onChangeBidPrice = (e:any)=>{
        var curPrice = e.target.value; //currentprice
        if(curPrice<=itemPrice){
            setMessage('Please input bigger price!');
            setShowAlert(true);
            setDisabled(true);
        }
        else{
            setShowAlert(false);
            setDisabled(false);
            setBidPrice(e.target.value);
        }
    }

    const myBid = async(e:any) =>{


        
        var date = new Date();
        var currentDateTime:any = moment(date, 'YYYY-MM-DD HH:mm:ss').format(); 
        var userId: string = user.id;

        console.log("lastBid::"+lastBid);

        if(lastBid===''){

            var body:any = {"user_id":userId,"item_id":itemId,"bid_price":bidPrice};
            
            await bidService.bidItem(body).then((res:any)=> {
                console.log("message::"+res.message);
                if(res.status=='success'){
                    console.log("status::"+res.status);
                    setMessage(res.message);
                    handleShowAlert();
                    setShowBid(false);
                    // props.parentRefresh('ongoing');
                    fetchData('ongoing');
                    dispatch(lastBid(currentDateTime));
                }
                else{
                    console.log("status::"+res.status);
                    setMessage(res.message);
                    handleShowAlert();
                }
            })
            .catch((err)=> console.log(err));
        }
        else{
            var duration = moment.duration(currentDateTime.diff(lastBid));
            var seconds = duration.asSeconds();
            console.log("seconds::"+seconds);
            if(seconds<6){
                handleShowAlert();
            }
            else{
                var body:any = {"user_id":userId,"item_id":itemId,"bid_price":bidPrice};
            
                await bidService.bidItem(body).then((res:any)=> {
                    console.log("message::"+res.message);
                    if(res.status=='success'){
                        console.log("status::"+res.status);
                        setMessage(res.message);
                        handleShowAlert();
                        setShowBid(false);
                        // props.parentRefresh('ongoing');
                        fetchData('ongoing');
                        dispatch(lastBid(currentDateTime));
                    }
                    else{
                        console.log("status::"+res.status);
                        setMessage(res.message);
                        handleShowAlert();
                    }
                })
                .catch((err)=> console.log(err));
    
            }
        }

    }
return (
    <div>

    <Nav variant="pills" activeKey={activeKey} className="mb-4">
        <Nav.Item>
            <Nav.Link eventKey="1"  onClick={(e:any) => {fetchData('ongoing'); setActiveKey(1);}}>
                OnGoing
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="2" title="Item"  onClick={(e:any) => {fetchData('completed');setActiveKey(2)}}>
            Completed
            </Nav.Link>
        </Nav.Item>
    </Nav> 
             
    <Row>
            <Col>Name</Col>
            <Col className="text-center">Current Price</Col>
            <Col className="text-center">Duration</Col>
            <Col className="text-center" xs={1} md={1}>Bid</Col>
    </Row>
    <hr />
    {datas.map((item:any)=>{
        return (
            <Card className="mb-3" key={item.id}>
                <Card.Body>
                    <Row>
                        <Col>{item.item_name}</Col>
                        <Col className="text-center">{parseInt(item.current_price)}$</Col>
                        <Col className="text-center">
                            {item.is_bidding ==1  &&
                                <Countdown eventTime={(Math.floor(Date.now() / 1000)+item.duration)} interval={1000} />
                            }
                            {item.is_bidding==0 &&
                            <Text  text={item.duration < 3600 ? new Date(item.duration * 1000).toISOString().substring(14, 19) : new Date(item.duration * 1000).toISOString().substring(11, 16)} />
                            }
                        </Col>
                        <Col className="text-center" xs={1} md={1}><Button disabled={item.is_bidding===0? true:false} variant="secondary" onClick={handleShowBid(item.id,item.current_price,item.is_bidding)}>Bid</Button></Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    })}

    <BootAlert show={showWarning} isShowing={showWarning} title="Insufficient Balance" message="Please, add deposit first" handleClose={handleWarningClose} clickParent={goDeposit} />
    <Modal show={showBid} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bid Item Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Alert show={showAlert} variant="danger">
                {message}
            </Alert>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Current Price</Form.Label>
                <Form.Control type="number" readOnly={true} value={parseInt(itemPrice)} placeholder="Enter Bid Price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Bid Price</Form.Label>
                <Form.Control type="number" onChange={onChangeBidPrice} placeholder="Enter Bid Price" />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" disabled={disabled} onClick={myBid}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
}

export default ItemList;
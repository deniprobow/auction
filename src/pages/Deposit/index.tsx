import React, {Component} from "react";
import './index.css';
import 'whatwg-fetch';
import Header from "../../components/Header";
import { Container } from "react-bootstrap";
import bidService from "../../services/bidService";
import { connect } from "react-redux";
import { setBid } from "../../redux/bidSlice";
import DepositForm from "./Form";



class Deposit extends Component{
    state = {
        items : []
    }
    

    render(){
        return(
            <div>
                <Header title="Deposit"  />
                <Container fluid className='h-100 p-5'>
                    <DepositForm />
                </Container>
            </div>
        )  
    }


}


const mapStateToProps = (state:any) => ({
    bids: state.bid.bids
});

const mapDispatchToProps = { setBid };
    
export default connect(mapStateToProps, mapDispatchToProps)(Deposit);


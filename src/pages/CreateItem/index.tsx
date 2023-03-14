import React, {Component} from "react";
import './index.css';
import 'whatwg-fetch';
import Header from "../../components/Header";
import { Container } from "react-bootstrap";
import bidService from "../../services/bidService";
import { connect } from "react-redux";
import { setBid } from "../../redux/bidSlice";
import FormCreateItem from "./Form";



class CreateItem extends Component{
    state = {
        items : []
    }
    

    render(){
        return(
            <div>
                <Header title="Items"  />
                <Container fluid className='h-100 p-5'>
                    <FormCreateItem />
                </Container>
            </div>
        )  
    }


}


const mapStateToProps = (state:any) => ({
    bids: state.bid.bids
});

const mapDispatchToProps = { setBid };
    
export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);


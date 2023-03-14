import React, {Component} from "react";
import './index.css';
import 'whatwg-fetch';
import Header from "../../components/Header";
import ItemList from "./ItemList";
import ItemHead from "./ItemHead";
import { Container } from "react-bootstrap";
import bidService from "../../services/bidService";
import { connect } from "react-redux";
import { setBid } from "../../redux/bidSlice";



class Homepage extends Component{
    state = {
        items : []
    }
       
    private getItems(status:any): void{
       let datas:any = bidService.getItemList(status);
    //    if(datas!==''){
    //     console.log("datas::"+JSON.stringify(datas));
    //     this.setState({items:datas});
    //    }
       
    }

    componentDidMount(){
        this.getItems('ongoing');
    }

    render(){
        return(
            <div>
                <Header title="Home Page"  />
                <Container fluid className='h-100 p-5'>
                    {/* <ItemHead getItems = {this.getItems} /> */}
                    <ItemList parentRefresh = {this.getItems}  items={this.state.items} />
                </Container>
            </div>
        )  
    }


}


const mapStateToProps = (state:any) => ({
    bids: state.bid.bids
});

const mapDispatchToProps = { setBid };
    
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);


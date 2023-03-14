import React, {Component} from "react";
import { useDispatch, useSelector } from "react-redux";
import { lastBid, setBid } from "../redux/bidSlice";
import 'whatwg-fetch';


export default {
    getItemList: async function(status:any){
        try{
            let url = 'http://localhost:3000/items';
            if(status){
                if(status==='completed'){
                     url = 'http://localhost:3000/items/completed';
                }
                else{
                    url = 'http://localhost:3000/items/ongoing';
                }
            }
            else{
                url = 'http://localhost:3000/items/ongoing';
            }
        
            const response = await fetch(url);   
            const datas = await response.json();
            console.log(datas);
            return datas;
        }catch(error){
            return [];
        }
       
    },
    bidItem: async function(body:any){
        
        try{
            const request0ptions = {
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(body)
            }

            const response = await fetch('http://localhost:3000/items/bid',request0ptions);   
            const datas = await response.json();
            console.log(datas);
            return datas;
        }catch(error){
            return [];
        }
       
    },
    addItem: async function(body:any){
        
        try{
            const request0ptions = {
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(body)
            }

            const response = await fetch('http://localhost:3000/items',request0ptions);   
            const datas = await response.json();
            console.log(datas);
            return datas;
        }catch(error){
            return [];
        }
       
    }
    
    
}



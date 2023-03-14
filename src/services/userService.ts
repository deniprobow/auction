import React, {Component} from "react";
import { useDispatch, useSelector } from "react-redux";
import { lastBid, setBid } from "../redux/bidSlice";
import 'whatwg-fetch';


export default {
    addDeposito: async function(id:string, amount:number){
        try{
            let url = 'http://localhost:3000/user/deposito';
            const request0ptions = {
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({"user_id":id,"amount":amount})
            }
            
            const response = await fetch(url, request0ptions);   
            const datas = await response.json();
            console.log(datas);
            return datas;
        }catch(error){
            return [];
        }
       
    },
    login: async function(username:string, password:string){
        try{
            let url = 'http://localhost:3000/auth/login';
            const request0ptions = {
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({"username":username,"password":password})
            }
            
            const response = await fetch(url, request0ptions);   
            const datas = await response.json();
            console.log(datas);
            return datas;
        }catch(error){
            return [];
        }       
    },
    register: async function(username:string, password:string){
        try{
            let url = 'http://localhost:3000/register';
            const request0ptions = {
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({"username":username,"name":username,"password":password})
            }
            
            const response = await fetch(url, request0ptions);   
            const datas = await response.json();
            console.log(datas);
            return datas;
        }catch(error){
            return [];
        }
    },
    
    
}



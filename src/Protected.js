import Header from './Header';
import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

function Login(props){
    let Cmp = props.cmp;
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("user-info")){
            navigate("/register");
        }
    },[]);
    return(
        
        <div>
            <Cmp/>
        </div>
    )
}

export default Login;
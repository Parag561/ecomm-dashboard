import Header from './Header';
import React,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom'

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    // useEffect(()=>{
    //     if(localStorage.getItem("user-info")){
    //         navigate("/add");
    //     }
    // },[]);
    async function login(){
        let item = {password,email}
     
        let data = await fetch("http://localhost:5000/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
       
         data = await data.json();
         if(data.name){
            localStorage.setItem("user-info",JSON.stringify(data));
            navigate("/add");
         }else{
            alert("Enter Correct details");
         }
         
         
         
    }
    return(
        
        <div>
            <Header/>
            <div className='col-sm-6 offset-sm-3'>
            <h1>Login</h1>
            <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="form-control"  />
            <br />
            <input type="text" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="form-control"  /> <br />
            <br />
            <button onClick={login} className="btn btn-primary">Login</button>
        </div>
        </div>
    )
}

export default Login;
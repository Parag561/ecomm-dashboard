import Header from './Header';
import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

function Register(){
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("user-info")){
            navigate("/add");
        }
    },[])
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    

    async function signUp(){
        let item = {name,password,email}
     
        let data = await fetch("http://localhost:5000/register",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
       
         data = await data.json();
         localStorage.setItem("user-info",JSON.stringify(data));
         navigate("/add");
       
    };
        
    return(
            <>
            <Header/>
        <div className='col-sm-6 offset-sm-3'>
            <h1>User Sign Up</h1>
            <input type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} className="form-control"  />
            <br />
            <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="form-control"  />
            <br />
            <input type="text" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="form-control"  /> <br />
            
            <button onClick={signUp} className="btn btn-primary">Sign UP</button>
        </div>
        </>
    )
}

export default Register;
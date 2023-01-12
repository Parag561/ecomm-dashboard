import Header from './Header';
import {
    useNavigate
  } from "react-router-dom";
import {useParams} from 'react-router-dom';
import React,{useEffect,useState} from 'react';
function UpdateProduct(props){
    const navigate = useNavigate();
   const params = useParams();
   const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
   const [data, setData] = useState([]);
   useEffect(()=>{
    getproductdetail();
   },[])

   async function getproductdetail(){
    let result  = await fetch(`http://localhost:5000/list/${params.id}`);
    result = await result.json();
    setData(result);
    setName(data.name);
    setPrice(data.price);
    setDescription(data.description);
    
   };
  async function editproduct(id){
    let item = {name,price,description}
    let data = await fetch(`http://localhost:5000/list/${params.id}`,{
        method:'Put',
        headers:{
            "Content-Type":"application/json"
            // ,
            // "Accept":"application/json"
        },
        body:JSON.stringify(item)
    });
     data = await data.json();
     navigate("/");
   }
    return(
        <div>
            <Header/>
            <br />
            <div className='col-sm-6 offset-sm-3'>
            <h1>Update Product</h1>
            <br />
            <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} defaultValue={data.name} /><br />
            <input type="text" className="form-control" onChange={(e)=>setPrice(e.target.value)} defaultValue={data.price} /><br />
            <input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)}  defaultValue={data.description} />
            <br />
            <button  onClick={()=>editproduct(data.id)} className="btn btn-primary">Update Product</button>
        </div></div>
    )
}

export default UpdateProduct;
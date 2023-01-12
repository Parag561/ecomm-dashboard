import Header from './Header';
import React,{useState} from 'react';
function AddProduct(){
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    async function Addproduct(){
        let item = {name,price,description}
        let data = await fetch("http://localhost:5000/add",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
         data = await data.json();
         alert("Data Has been Saved");
    }
    return(
        <div>
            <Header/>
            <br />
            <div className='col-sm-6 offset-sm-3'>
            <h1>Add Products</h1>
            <br />
            <input type="text"  placeholder="name" onChange={(e)=>setName(e.target.value)}  className="form-control"  />
            <br />
            <input type="text" placeholder="price" onChange={(e)=>setPrice(e.target.value)}  className="form-control"  />
            <br />
            <input type="text"  placeholder="description" onChange={(e)=>setDescription(e.target.value)}  className="form-control"  />
            <br />
            <button onClick={Addproduct} className="btn btn-primary">Add Product</button>
        </div>
        </div>
    )
}

export default AddProduct;
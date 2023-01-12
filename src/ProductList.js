import Header from './Header';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getProduct();
    }, []);
    const getProduct = async () => {
        let result = await fetch('http://localhost:5000/list');
        result = await result.json();
        setData(result);
    }
    async function deleteOp(id){
        let result = await fetch('http://localhost:5000/list/'+id,{
            method:"DELETE"
        })
        result = await result.json();
        getProduct();
    }

    async function searchhandle(item){
        let key = item.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result= await result.json();
            if(result){
                setData(result);
            }
        }else{
            getProduct();
        }
       
    }
    return (
        <div>
            <Header />
            <br />
            <div className='col-sm-8 offset-sm-2'>
            <h1>Products List</h1>
            <br />
            <input type="text" className="search" placeholder='search Product' onChange={searchhandle} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       data.length>0 ? data.map((item,index)=>
                        <tr key={item._id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td><button onClick={()=>{deleteOp(item.id)}} className="btn btn-primary">Delete</button></td><td><Link className="btn btn-primary" to={"update/"+item.id}>Update</Link></td>
                       
                    </tr>): <h1>NO result found</h1>

                        
                    }
                </tbody>
            </Table>
            </div>
        </div>
    )
}
export default ProductList;
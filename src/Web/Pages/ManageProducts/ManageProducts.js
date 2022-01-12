import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import './ManageProducts.css'

const ManageProducts = () => {
    const [product , setProduct]=useState([]);
    const [control, setControl] = useState(false);
    useEffect(()=>{
        fetch('https://jobs-window-server.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[control]);

    const handleDelete = (id) => {
      fetch(`https://jobs-window-server.herokuapp.com/deleteproduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            window.confirm("Do you really want to Delete?");
            setControl(!control);
           
          }
        });
      console.log(id);
    };
    return (
        <div>
            
            <div className="my-5">
            <h1 className="text-secondary">Manage All Job Post</h1>
            <h6>Total job: {product.length}</h6>
            <Table striped bordered hover className="custom-size">
        <thead>
          <tr className="bg-secondary text-light">
            <th>S.N</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Location</th>
            {/* <th>Status</th> */}
            <th>Action</th>
          </tr>
        </thead>
        {product?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>
                 <p className="title-font">{pd.job_title}</p>
                 <p className="des-font">{pd.time}</p>
            </td>
              <td> <img width="150px" className="mx-5" src={pd.company_logo} alt="" /> </td>
              <td className="fw-lighter"><h6 className="mx-5 title-font">{pd.location}</h6></td>
              {/* <td>
                <input
                  
                  type="text"
                  defaultValue={pd.status}
                />
              </td> */}
              <div className="d-flex my-5 mx-5">
              <button onClick={() => handleDelete(pd?._id)} className="btn bg-danger p-2 text-light btn-fs">Delete</button>
              </div>
            </tr>
          </tbody>
        ))}
      </Table>
            </div>
        </div>
    );
};

export default ManageProducts;
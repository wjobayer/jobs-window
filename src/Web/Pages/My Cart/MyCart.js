import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Firebase/useAuth';


const MyCart = () => {

    const {user}=useAuth();
    const [delivery, setDelivery] = useState([]);
  
    const [control, setControl] = useState(false);
  
    useEffect(() => {
      fetch(`https://jobs-window-server.herokuapp.com/mycart/${user.email}`)
        .then((res) => res.json())
        .then((data) => setDelivery(data));
    }, [control]);
    console.log(delivery);
  
    const handleDelete = (id) => {
      fetch(`https://jobs-window-server.herokuapp.com/deleteorder/${id}`, {
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
        <Container className="my-5">
        <h1 className="my-5 text-secondary">My All Saved Jobs Here</h1>
   <div className="services">
     <div className="row">
       {delivery?.map((pd) => (
         <div className="col-md-6 my-2">
           <div className="service border border rounded-3 p-3">
             <div className="services-img ">
               <img className="w-25 mb-3" src={pd?.image} alt="" />
             </div>

             <h4 className="text-secondary">{pd?.job_title}</h4>
             <h6 className="text-secondary">{pd?.company_name}</h6>
             <h6 className="text-secondary">{pd?.location}</h6>
             <h6 className="text-secondary">{pd?.time}</h6>
             <h6 className="text-secondary">{pd?.total_employee}</h6>
             <p className="des-font">{pd?.job_description}</p>
             <p className="des-font">MY NOTES: {pd?.notes}</p>
             
             <div className="d-flex">
              <a className='btn btn-primary' href={pd?.job_links}>Job Links For Apply</a>
             <button
               onClick={() => handleDelete(pd?._id)}
               className="btn btn-secondary btn-fs mx-auto"
             >
               Cancel
             </button>
             </div>
           </div>
         </div>
       ))}
     </div>
   </div>
        </Container>
     </div>
    );
};

export default MyCart;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../Firebase/useAuth';
import './ConfirmOrder.css'
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHome, faLocationArrow, faMagnet, faMailBulk, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';


const ConfirmOrdere = () => {
    const {id}=useParams()
    const [details,setDetails]= useState([])
    const [specificDetail,setSpecificDetail] = useState({})
   const {user}=useAuth();
   
 useEffect(() =>
      fetch("https://jobs-window-server.herokuapp.com/products")
      .then(res => res.json())
      .then(data=>setDetails(data))
    ,[])


useEffect(() =>{
    if(details.length>0){
        const matchedData= details.find(detail=> detail._id==id)
        setSpecificDetail(matchedData);
    }

}

,[details]);


const { register, handleSubmit, reset } = useForm();

const onSubmit = (data) => {
    data.email = user.email;
    data.username  = user.displayName;
    data.imageURL =user.photoURL;
    data.status = "pending";
    data.image = specificDetail?.company_logo;
    data.description =specificDetail.description;
    data.type_of_job=specificDetail?.type_of_job
    data.job_title=specificDetail?.job_title
    data.company_name=specificDetail?.company_name
    data.location=specificDetail?.location
    data.time=specificDetail?.time
    data.total_employee=specificDetail?.total_employee
    data.id=specificDetail?._id
    data.job_links=specificDetail?.job_links


    fetch("https://jobs-window-server.herokuapp.com/confirmorder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
            alert('Bookmarked successfully');
            // reset();
        }
    });
    // console.log(data);
  };

    return (
        <div>
          <Header></Header>
          <Container>
              <h1 className="mt-5">Your Job Details</h1>
<div className='border border-primary rounded'>
<Navbar>
  <Nav.Link><Link className="nav-link " to="/">Author<Link/></Link></Nav.Link>
              <Navbar.Brand href="#"> <NavItem>   <Link  to="/"><img width="40px" className="rounded-circle" src={specificDetail?.imageURL} alt="" /></Link> </NavItem> </Navbar.Brand>
      <Nav.Link><Link className="nav-link " to="/">{specificDetail?.username}<Link/></Link></Nav.Link>
      <Nav.Link><Link className="nav-link " to="/"><FontAwesomeIcon icon={faMailBulk} /> {specificDetail?.email}<Link/></Link></Nav.Link>
              </Navbar>
</div>
          <div className="row mt-5 mb-5">
          <div className="servicedetails col-lg-4  rounded-3 shadow p-5">
          <h6 className="text-start text-light m-2"><span className="py-1 px-2 customround">{specificDetail?.type_of_job}</span></h6>
          <img className="w-50 mt-5" src={specificDetail?.company_logo} alt="" />

           <h5 className="mt-1 text-danger title-font"><FontAwesomeIcon icon={faMagnet} /> {specificDetail?.job_title}</h5>
           <h5 className="mt-1 text-danger title-font"><FontAwesomeIcon icon={faHome} /> {specificDetail?.company_name}</h5>
           <h5 className="mt-1 text-danger title-font"><FontAwesomeIcon icon={faLocationArrow} /> {specificDetail?.location}</h5>
           <h5 className="mt-1 text-danger title-font"><FontAwesomeIcon icon={faClock} /> {specificDetail?.time}</h5>
           <p className=" fw-lighter des-font">{specificDetail?.job_description}</p>
           <p className="title-font text-secondary">Total Employee {specificDetail?.total_employee}</p>
          </div>
          <div className="order-form col-lg-8  mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4>My Important Notes For Boomark</h4>
                <textarea className="btn btn-outline-secondary border-none" defaultValue="This Job is suitable for me." {...register("notes")}  />
                <input className="btn btn-primary" type="submit" value="Bookmark" />
            </form>
          </div>
          </div>
          </Container>
          <Footer></Footer>
    </div>
    );
};

export default ConfirmOrdere;
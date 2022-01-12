import { faClock, faHome, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'


const Product = ({product}) => {
    const{_id,job_title,company_name,location,type_of_job,time,job_description,skills,total_employee,company_logo}=product;
    return (
        <div className='product p-3 m-4'>
    <h6 ><span className="py-1 px-2 customround">{type_of_job}</span></h6>
    <img className="w-25 image" src={company_logo} alt="" />
    <h3>{job_title}</h3>
    <h6 className='text-primary' ><FontAwesomeIcon icon={faHome} /> {company_name}</h6>
    <h6><FontAwesomeIcon icon={faLocationArrow} /> {location}</h6>
    <h6><FontAwesomeIcon icon={faClock} /> {time}</h6>
    <h6 className="text-success">{total_employee} Employee</h6>
    <Link to={`/confirmorder/${_id}`}>
        <Button className="custom-btn">Details</Button>
    </Link>
    </div>
    );
};

export default Product;
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hw = () => {
    return (
        <div className='mt-4'>
            <h1 className='display-5'>FInd Your <span className='text-danger'>Dream  Job</span> Here </h1>
            <p className='px-5 my-5'>Job hunting, job seeking, or job searching is the act of looking for employment, due to unemployment, underemployment, discontent with a current position, or a desire for a better position.Job hunting, job seeking, or job searching is the act of looking for employment, due to unemployment, underemployment, discontent with a current position, or a desire for a better position.</p>
            <div className='d-flex justify-content-center'>
            <Nav.Link><Link className="nav-link btn btn-primary text-light " to="/dashboard/addproduct">HIRE<Link/></Link></Nav.Link>
            <Nav.Link><Link className="nav-link btn btn-outline-primary" to="/products">WORK<Link/></Link></Nav.Link>
            </div>
        </div>
    );
};

export default Hw;
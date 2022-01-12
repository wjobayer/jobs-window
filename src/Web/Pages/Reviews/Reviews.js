import React, { useEffect, useState } from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Review from '../../Components/Review/Review';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Reviews = () => {
    const [product , setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://jobs-window-server.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div>
            <Container>
            <h1 className=" text-secondary">What Our <span className="fw-light text-danger">Clients Say</span></h1>
            <p className=" mb-5">Welcome to my personal presentation</p>
        <Carousel className="bg-primary py-5">
        {
            product.map(product =><Carousel.Item>
                <Review
                key={product._id}
                product={product}
            ></Review>
            </Carousel.Item>
            )
        }
        </Carousel>
        <Button className="my-2"><Link className="nav-link text-light" to="/createreview">I Want To Provide a Feedback<Link/></Link></Button>
            </Container>
        </div>
    );
};

export default Reviews;
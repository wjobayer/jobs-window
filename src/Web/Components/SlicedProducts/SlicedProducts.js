import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../../Components/Product/Product';
import './SlicedProducts.css'

const SlicedProducts = () => {
    const [product , setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://jobs-window-server.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className="my-5">
            <Container className="my-5">
           <h1 className=" display-5">Jobs For You</h1>
            <p className=" mb-5">Recent and most viewed jobs here</p>
            <div className="product-collection">{
            product.slice(0, 6).map(product =><Product
                key={product.key}
                product={product}
            ></Product>
            )
        }
        </div>
           </Container>
        </div>
    );
};

export default SlicedProducts;
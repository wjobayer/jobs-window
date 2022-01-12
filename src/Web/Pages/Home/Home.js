import React from 'react';
import Banner from '../../Components/Banner/Banner';
import SlicedProducts from '../../Components/SlicedProducts/SlicedProducts';
import Reviews from '../Reviews/Reviews';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Hw from '../../Components/HW/Hw';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Hw></Hw>
            <SlicedProducts></SlicedProducts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
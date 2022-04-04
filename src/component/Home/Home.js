import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import axn from '../images/axn.png'

const Home = () => {
    const [reviews, setReviews] = useReviews()


    return (
        <div>
            <div className='container d-flex align-items-center '>
                <div>
                    <h1 className='h1'>The Next Big Gaming Store</h1>
                    <h1 className='h2 text-success'>Looking For the Best in the town?</h1>
                    <p >Ever Wondered, where to buy them psn stocks and xbox stocks, guess what we got the solution for you, within a minute your codes will be delivered and you will be able to enjoy your game without any hesitation</p>
                    <button className='btn-dark btn'>Buy Now</button>
                </div>

                <img src={axn} alt="pic not found" />
            </div>

            <div className='container'>
                <h1>Reviews : {reviews.length}</h1>  
            </div>
        </div>
    );
};

export default Home;    
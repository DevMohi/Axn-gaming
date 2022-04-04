import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import axn from '../images/axn.png'
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews()


    return (
        <div>
            <div className='container d-flex align-items-center'>
                <div>
                    <h1 className='h1'>The Next Big Gaming Store</h1>
                    <h1 className='h2 text-success'>Looking For the Best in the town?</h1>
                    <p >Ever Wondered, where to buy them psn stocks and xbox stocks, guess what we got the solution for you, within a minute your codes will be delivered and you will be able to enjoy your game without any hesitation</p>
                    <button className='btn-dark btn' >Buy Now</button>
                </div>

                <img src={axn} alt="pic not found" />
            </div>

            <div className='container main-container'>

                {
                    reviews.slice(0, 3).map(review => <div className='border rounded shadow-lg p-3 mb-5 bg-white rounded'>

                        <div className='d-flex align-items-center justify-content-center rounded review-img'>
                            <img src={review.img} alt="" />
                        </div>
                        <div className='px-2 text-center py-2'>
                            <h3 className='pt-3'>Name : {review.name}</h3>
                            <p className='h6 '>Review : {review.review}</p>
                            <small className='fw-bold'> Rating : {review.rating}</small>
                        </div>

                    </div>)
                }
            </div>
            <div className='d-flex justify-content-center'>
                <Link to='/reviews'><button className='btn btn-dark '>See More</button></Link>
            </div>
        </div>
    );
};

export default Home;    
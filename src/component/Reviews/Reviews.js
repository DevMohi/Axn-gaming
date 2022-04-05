import React from 'react';
import useReviews from '../../hooks/useReviews';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div className='container  py-2'>

            <h1 className='py-3 text-center'>Here is What Our Customer Says!</h1>

            <div className=' py-5 mains-container'>

                {
                    reviews.map(review => <div className='border rounded shadow-sm p-3 mb-5 bg-white rounded border-3'>

                        <div className='d-flex align-items-center justify-content-center rounded review-img'>
                            <img src={review.img} alt="" />
                        </div>

                        <div className='px-2 text-center'>
                            <h3 className='pt-3'>Name : {review.name}</h3>
                            <p className='h6 '>Review : {review.review}</p>
                            <small className='fw-bold'> Rating : {review.rating}</small>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;
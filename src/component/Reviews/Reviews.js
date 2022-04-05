import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <div className='container  py-2'>

            <h1 className='py-3 text-center'>Here is What Our Customer Says!</h1>

            <div className=' py-5 mains-container'>

                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
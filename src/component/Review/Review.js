import React from 'react';

const Review = (props) => {
    const { name, review, rating, img } = props.review;
    return (
        <div className='border rounded shadow-sm p-3 mb-5 bg-white rounded'>


            <div className='d-flex align-items-center justify-content-center rounded review-img'>
                <img src={img} alt="" />
            </div>
            <div className='px-2 text-center py-2'>
                <h3 className='pt-3'>Name : {name}</h3>
                <p className='h6 '>Review : {review}</p>
                <small className='fw-bold'> Rating : {rating}</small>
            </div>

        </div>
    );
};

export default Review;
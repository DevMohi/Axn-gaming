
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import axn from '../images/axn.png'
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews] = useReviews()


    return (
        <div>
            <div className='container d-flex align-items-center axn-container'>
                <div className='axn-info'>
                    <h1 className='h1'>The Next Big Gaming Store</h1>
                    <h1 className='h2 text-success'>Looking For the Best in the town?</h1>
                    <p >Ever Wondered, where to buy them psn stocks and xbox stocks, guess what we got the solution for you, within a minute your codes will be delivered and you will be able to enjoy your game without any hesitation</p>
                    <button className='btn common-color-btn' >Buy Now</button>
                </div>

                <img src={axn} alt="pic not found" />
            </div>

            <h1 className='text-center'>Customer Reviews({reviews.slice(0, 3).length})</h1> <br />
            <div className='container main-container'>

                {
                    reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
            <div className='mb-4 d-flex justify-content-center'>
                <Link to='/reviews'><button className='btn common-color-btn px-5 '>See All Reviews</button></Link>
            </div>
        </div>
    );
};

export default Home;    
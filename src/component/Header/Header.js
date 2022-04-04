import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>

                    <CustomLink className='ms-2 ' to='/'>MealDb</CustomLink>

                    <Nav className="ms-auto d-flex align-items-center">
                        <CustomLink className='ms-2 ' to='/'>Home</CustomLink>
                        <CustomLink className='ms-2 ' to='/reviews'>Reviews</CustomLink>
                        <CustomLink className='ms-2 ' to='/dashboard'>Dashboard</CustomLink>
                        <CustomLink className='ms-2 ' to='/blogs'>Blogs</CustomLink>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
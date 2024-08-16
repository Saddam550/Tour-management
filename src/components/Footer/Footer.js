import React from 'react';
import './Footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const quick__links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
];

const quick__links2 = [
    {
        path: '/gallery',
        display: 'Gallery'
    },
    {
        path: '/login',
        display: 'Login'
    },
    {
        path: '/register',
        display: 'Register'
    },
];

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div>
            <footer className='footer'>
                <Container>
                    <Row>
                        <Col lg="3">
                            <div className='logo'>
                                <img src={logo} alt='' />
                                <p>Explore the world's wonders, from pristine beaches to vibrant cities, with us</p>
                                
                                <div className="social__links d-flex align-items-center gap-4">
                                    <span>
                                        <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'><i className="fab fa-youtube"></i></a>
                                    </span>
                                    <span>
                                        <a href='https://github.com/' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                                    </span>
                                    <span>
                                        <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><i className="fab fa-facebook"></i></a>
                                    </span>
                                    <span>
                                        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'><i className="fab fa-instagram"></i></a>
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3'>
                            <h5 className='footer__link-title'>Discover</h5>
                            <ListGroup className='footer__quick-links'>
                                {quick__links.map((item, index) => (
                                    <ListGroupItem key={index} className='ps-0 border-0'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Col>

                        <Col lg='3'>
                            <h5 className='footer__link-title'>Quick Links</h5>
                                <ListGroup className='footer__quick-links'>
                                    {quick__links2.map((item, index) => (
                                        <ListGroupItem key={index} className='ps-0 border-0'>
                                            <Link to={item.path}>{item.display}</Link>
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                        </Col>

                        <Col lg='3'>
                            <h5 className='footer__link-title'>Contact</h5>
                                <ListGroup className='footer__quick-links'>
                                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                       <h6 className='mb-0 d-flex align-items-center gap-2'>
                                            <span><i class="fa-solid fa-map-pin"></i></span>
                                            Address:
                                        </h6>

                                        <p className='mb-0'>Dhaka, Bangladesh</p>    
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                                        <span><i class="fa-solid fa-envelope"></i></span>
                                            Email:
                                        </h6>

                                        <p className='mb-0'>freelancersaddam550@gmail.com</p>    
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                                        <span><i class="fa-solid fa-phone"></i></span>
                                            Phone:
                                        </h6>

                                        <p className='mb-0'>+8801998065133</p>    
                                    </ListGroupItem> 
                                </ListGroup>
                        </Col>

                        <Col lg='12' className='text-center pt-5'>
                            <p className='copyright'>Copyright {year}, design and develop by Saddam Hossen. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;

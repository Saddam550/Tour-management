import React from 'react';
import './newsletter.css';
import { Container, Row , Col } from 'react-bootstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
    return (
        <div>
            <section className='newsletter'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="newsletter__content">
                                <h2>Subscribe now to get traveling information.</h2>

                                <div className="newsletter__input">
                                    <input type="email" placeholder='Enter your email' />
                                    <button className='btn newsletter__btn'>Subscribe</button>
                                </div>

                                <p>Embark on a journey of discovery by subscribing to our newsletter. Get exclusive travel tips, destination highlights, and insider insights delivered straight to your inbox. </p>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="newsletter__img">
                                <img src={maleTourist} alt='' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Newsletter;
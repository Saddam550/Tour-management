import React from 'react';
import '../styles/Home.css'

import Subtitle from '../shared/Subtitle'
import { Container, Row, Col } from 'react-bootstrap';
import worldImg from '../assets/images/world.png';
import img1 from '../assets/images/hero-img01.jpg';
import img2 from '../assets/images/hero-img02.jpg';
import vid from '../assets/images/hero-video.mp4';
import experienceImg from '../assets/images/experience.png';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';

const Home = () => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle subtitle={'Know Before You Go'} />
                                    <img src={worldImg} alt="" />
                                </div>
                                <h1>
                                Embark on Adventures, Create Lifelong{" "}<span className='highlight'>Memories</span>
                                </h1>
                                <p>
                                    Traveling is a captivating tapestry of experiences. It weaves together cultures, landscapes, and memories. Embrace the world's wonders and write your own adventure, one destination at a time.
                                </p>
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className='hero__img-box'>
                                <img src={img1} alt='' />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className='hero__img-box mt-4'>
                                <video src={vid} alt='' controls />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className='hero__img-box mt-5'>
                                <img src={img2} alt='' />
                            </div>
                        </Col>

                        <SearchBar />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className="services__subtitle">What we serve</h5>
                            <h2 className="services__title">We offer our best services</h2>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5'>
                            <Subtitle subtitle={'Explore'} />
                            <h2 className="featured__tour-title">Our featured tours</h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>   

            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className='experience__content'>
                                <Subtitle subtitle={'Experience'}/>

                                <h2>With our extensive knowledge<br />we will cater to your needs</h2>
                                <p>
                                    Experience a captivating journey through our travel website,
                                    <br/>where adventure and discovery await at every click.
                                </p>
                            </div>
                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className='counter__box'>
                                    <span>12k+</span>
                                    <h6>Successful Trip</h6>
                                </div>
                                <div className='counter__box'>
                                    <span>2k+</span>
                                    <h6>Regular Client</h6>
                                </div>
                                <div className='counter__box'>
                                    <span>15</span>
                                    <h6>Years experience</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className="experience__img">
                                <img src={experienceImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle subtitle={'Gallery'} />
                            <h2 className='gallery__title'>Visit our customers tour gallery</h2>
                        </Col>
                        <Col lg='12'>
                            <MasonryImagesGallery />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;
import React, {useState} from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour;
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName: '',
        phone:'',
        guestSize:1,
        bookAt: ''
    })

    const handleChange = (e) => {
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)

    const handleClick = (e) => {
        e.preventDefault();
        
        navigate("/thank-you");
    };
    

    return (
        <div className='booking'>
            <div className='booking__top d-flex align-items-center justify-content-between'>
                <h3>${price} <span>/per person</span></h3>
                <span className='tour__rating d-flex align-items-center'>
                    <i className="fa-solid fa-star">
                        {avgRating === 0 ? null : avgRating} ({reviews?.length})
                    </i>
                </span>
            </div>
            {/* ---booking form--- */}
            <div className="booking__form">
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange} />
                    </FormGroup>
                </Form>

                <Form className='booking__info-form'>
                    <FormGroup>
                        <input type='number' placeholder='Phone' id='phone' required onChange={handleChange} />
                    </FormGroup>
                </Form>

                <Form className='booking__info-form'>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='date' placeholder='' id='bookAt' required onChange={handleChange} />
                        <input type='number' placeholder='Guest' id='guestSize' required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>

            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <div className='d-flex justify-content-between align-items-center'>
                            
                                <h5>${price} <i className="fa-solid fa-xmark"></i> 1 person</h5>
                                <span>${price}</span>
                            
                        </div>
                    </ListGroupItem>

                    <ListGroupItem className='border-0 px-0'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5>Service Charge</h5>
                            <span>${serviceFee}</span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5>Total</h5>
                            <span>${totalAmount}</span>
                        </div>
                    </ListGroupItem>
                </ListGroup>
                <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
            </div>


        </div>
    );
};

export default Booking;
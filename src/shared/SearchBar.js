import React,{useRef} from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'react-bootstrap';

const SearchBar = () => {

    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);

    const searchHandler = async () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;
    
        if (location === "" || distance === "" || maxGroupSize === "") {
            return alert("All fields are required");
        }
          
    }
    

    return (
        <div>
            <Col lg='12'>
                <div className="search__bar">
                    <Form className='d-flex align-items-center gap-4'>
                        <FormGroup className='d-flex gap-3 form__group from__group-fast'>
                            <span>
                                <i class="fa-solid fa-location-dot"></i>
                            </span>
                            <div>
                                <h6>Location</h6>
                                <input type='text' placeholder='Where are you going?' ref={locationRef}></input>
                            </div>
                        </FormGroup>
                        <FormGroup className='d-flex gap-3 form__group from__group-fast'>
                            <span>
                                <i class="fa-solid fa-location-pin"></i>
                            </span>
                            <div>
                                <h6>Distance</h6>
                                <input type='number' placeholder='Distance k/m' ref={distanceRef}></input>
                            </div>
                        </FormGroup>
                        <FormGroup className='d-flex gap-3 form__group from__group-fast'>
                            <span>
                                <i class="fa-solid fa-user-group"></i>
                            </span>
                            <div>
                                <h6>Max People</h6>
                                <input type='number' placeholder='0' ref={maxGroupSizeRef}></input>
                            </div>
                        </FormGroup>

                        <span className="search__icon" type="submit" onClick={searchHandler}>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                    </Form>
                </div>
            </Col>
        </div>
    );
};

export default SearchBar;
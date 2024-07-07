import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';

import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    // Update the state with the form field changes
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement your registration logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg='8' className='m-auto'>
              <div className='login__container d-flex justify-content-between'>
                <div className='login__img'>
                  <img src={registerImg} alt='' />
                </div>

                <div className='login__form'>
                  <div className='user'>
                    <img src={userIcon} alt='' />
                  </div>
                  <h2>Register</h2>

                  <Form onSubmit={handleSignUp}>
                    <FormGroup>
                      <input
                        type='text'
                        placeholder='Username'
                        required
                        id='username'
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type='email'
                        placeholder='Email'
                        required
                        id='email'
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type='password'
                        placeholder='Password'
                        required
                        id='password'
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <Button className='btn secondary__btn auth__btn' type='submit'>
                      Create Account
                    </Button>
                  </Form>
                  <p>
                    Already have an account? <Link to='/login'>Login</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Register;



// import React, { useContext, useState } from 'react';
// import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/login.css';

// import registerImg from '../assets/images/register.png';
// import userIcon from '../assets/images/user.png';
// import { AuthContext } from '../context/AuthContext';
// import {BASE_URL} from '../utils/config';

// const Register = () => {

//     const [credentials, setCredentials] = useState({
//         userName : undefined,
//         email: undefined,
//         password: undefined,
//     });

//     const {dispatch} = useContext(AuthContext);
//     const navigate = useNavigate()

//     const handleChange = e = {
//         setCredentials(prev => ({...prev, [e.target.id]: e.target.value}));
//     };

//     const handleClick = async e =>{
//         e.preventDefault();

//         try {
//             const res = await fetch(`${BASE_URL}/auth/register`,{
//                 method: 'post',
//                 headers:{
//                     'content-type':'application/json'
//                 },
//                 body: JSON.stringify(credentials)
//             })
//             const result = await res.json()

//             if(!res.ok)alert(result.message)

//             dispatch({type: 'REGISTER_SUCCESS'})
//             navigate('/login')

//         } catch (err){
//             alert(err.message);
//         }
//     }

//     return (
//         <div>
//             <section>
//                 <Container>
//                     <Row>
//                         <Col lg='8' className='m-auto'>
//                             <div className='login__container d-flex justify-content-between'>
//                                 <div className='login__img'>
//                                     <img src={registerImg} alt='' />
//                                 </div>

//                                 <div className='login__form'>
//                                     <div className='user'>
//                                         <img src={userIcon} alt='' />
//                                     </div>
//                                     <h2>Register</h2>

//                                     <Form onSubmit={handleSignUp}>
//                                         <FormGroup>
//                                             <input type='text' name='name' placeholder='Username' required  />
//                                         </FormGroup>
//                                         <FormGroup>
//                                             <input type='email' name='email' placeholder='Email' required />
//                                         </FormGroup>
//                                         <FormGroup>
//                                             <input type='password' name='password' placeholder='Password' required />
//                                         </FormGroup>
//                                         <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
//                                     </Form>
//                                     <p>Already have an account? <Link to='/login'>Login</Link></p>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </div>
//     );
// };

// export default Register;
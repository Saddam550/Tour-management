import React, { useRef, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // Make sure to create and import your CSS file
import logo from '../../assets/images/logo.png';


const nav__links = [
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

const Header = () => {

  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 || 
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => {
      stickyHeaderFunc();

       return window.removeEventListener('scroll', stickyHeaderFunc);
    };
  }, []);

  return (
    <div>
      <header className="header" ref={headerRef}>
        <Container>
          <Row>
            <div className="nav__wrapper d-flex align-items-center justify-content-between">
              {/* ===logo=== */}
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              {/* ======logo end====== */}

              {/* ======menu start====== */}
              <div className='navigation'>
                <ul className="menu d-flex align-items-center gap-5">
                  {nav__links.map((item, index) => (
                    <li className='nav__item' key={index}>
                      <NavLink
                        to={item.path}
                        activeClassName="active__link" // Use activeClassName for active links
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              {/* ======menu end====== */}

              {/* Right Section */}
              <div className='nav_right d-flex align-items-center gap-4'>
                <div className='nav__btns d-flex align-items-center gap-4'>
                <Button className='btn secondary__btn'>
                        <Link to='/login' className='btn secondary__btn'>Login</Link>
                      </Button>
                      <Button className='btn primary__btn'>
                        <Link to='/register' className='btn primary__btn'>Register</Link>
                      </Button>
                </div>

                <span className='mobile__menu'>
                  <i className="fa-solid fa-bars"></i> {/* Font Awesome bars icon */}
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Header;










// import React, { useRef, useEffect, useContext } from 'react';
// import { Container, Row, Button } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import './Header.css'; // Make sure to create and import your CSS file

// import logo from '../../assets/images/logo.png';
// import { AuthContext } from '../../providers/AuthProvider';

// const nav__links = [
//   {
//     path: '/home',
//     display: 'Home'
//   },
//   {
//     path: '/about',
//     display: 'About'
//   },
//   {
//     path: '/tours',
//     display: 'Tours'
//   },
// ];

// const Header = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch(error => console.error(error));
//   };

//   const headerRef = useRef(null);

//   const stickyHeaderFunc = () => {
//     window.addEventListener('scroll', () => {
//       if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         headerRef.current.classList.add('sticky__header');
//       } else {
//         headerRef.current.classList.remove('sticky__header');
//       }
//     });
//   };

//   useEffect(() => {
//     stickyHeaderFunc();

//     return () => window.removeEventListener('scroll', stickyHeaderFunc);
//   }, []);

//   return (
//     <div>
//       <header className="header" ref={headerRef}>
//         <Container>
//           <Row>
//             <div className="nav__wrapper d-flex align-items-center justify-content-between">
//               {/* ===logo=== */}
//               <div className="logo">
//                 <img src={logo} alt="logo" />
//               </div>
//               {/* ======logo end====== */}

//               {/* ======menu start====== */}
//               <div className='navigation'>
//                 <ul className="menu d-flex align-items-center gap-5">
//                   {nav__links.map((item, index) => (
//                     <li className='nav__item' key={index}>
//                       <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link" : ""}>
//                         {item.display}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               {/* ======menu end====== */}

//               {/* Right Section */}
//               <div className='nav_right d-flex align-items-center gap-4'>
//                 <div className='nav__btns d-flex align-items-center gap-4'>
//                   {user ? (
//                     <>
//                         <h5 className='mb-0'>Welcome, {user}</h5>
//                       <Button className='btn btn-dark' onClick={handleLogOut}>Log out</Button>
//                     </>
//                   ) : (
//                     <>
//                       <Button className='btn secondary__btn'>
//                         <Link to='/login' className='btn secondary__btn'>Login</Link>
//                       </Button>
//                       <Button className='btn primary__btn'>
//                         <Link to='/register' className='btn primary__btn'>Register</Link>
//                       </Button>
//                     </>
//                   )}
//                 </div>

//                 <span className='mobile__menu'>
//                   <i className="fa-solid fa-bars"></i> {/* Font Awesome bars icon */}
//                 </span>
//               </div>
//             </div>
//           </Row>
//         </Container>
//       </header>
//     </div>
//   );
// };

// export default Header;


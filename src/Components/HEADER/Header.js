import React from 'react'
import {Navbar,Container,Nav, NavDropdown}from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { clearLoginStatus } from '../../Slices/UserSlice'
import {faOpencart} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../HEADER/Header.css';


function Header() {

  // get state from store.
  let { userObj, isError, isLoading, isSuccess, errMsg }= useSelector(state => state.user);
  let dispatch= useDispatch();
  let navigate= useNavigate();
  
  // user logout.
  const userLogout = () => {
    localStorage.clear();
    dispatch(clearLoginStatus());
    navigate('/login');
  }



  return (
    <div>
      <Navbar  className='navbar_design h-m-50 p-0' expand="lg"  style={{backgroundColor :'#8E8D8A'}}>
  <Container fluid>
    <Navbar.Brand  href="/">
  
      <div className="row">
        <div className="col-4 ">
          
        <FontAwesomeIcon icon={faOpencart} size='2x' className='text-center'/> 
        {/* <FontAwesomeIcon icon="fa-duotone fa-tags" /> */}
          </div>
          <div className="col-8">
          <p className='mt-3' >Metakart</p>
          </div>
          
           </div>
            </Navbar.Brand>
   
    <Navbar.Toggle  aria-controls="navbarScroll" />
    <Navbar.Collapse  id="navbarScroll" className='mx-auto'>
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>

        {isSuccess !== true ? (
            <>
              <Link className='nav-link ' to="login">LOGIN</Link>

              <Link className='nav-link ' to="pricing">PRICING</Link>

            </>
          ) : (
            <>
            {/* visible when a user is logged IN. */}
            <Link className='nav-link' to="support">SUPPORT</Link>
            <a className='nav-link' href='https://opensea.io/collection/spatialx'>NFTs</a>
            <Link className='nav-link' to="community" >COMMUNITY</Link>
            <Link className='nav-link' to="/visit">METASTORE</Link>
          
              <NavDropdown title={userObj.username} id='collapsible-nav-dropdown' className='drop-down justify-content-end ml-auto' style={{color: 'black'}}>
                <NavDropdown.Item><Link className='nav-link' style={{color: 'black'}} to="/profile">My Profile</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                <NavDropdown.Item onClick={userLogout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </>

          )
      
        }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </div>
  )
}

export default Header
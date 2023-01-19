import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineClose } from 'react-icons/ai';
import logo1 from '../../../assets/images/logo.png';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.scss';
import { QuantityPicker } from 'react-qty-picker';
import { GET_Item_Quantity } from '../../../redux/type/types';
import { BsBoxSeam } from 'react-icons/bs';
import { FcLike } from 'react-icons/fc';
// import { ADD_TO_CARD } from '../../../Redux/type/types';
// import Modal from 'react-bootstrap/Modal';
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle } from 'mdb-react-ui-kit';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

function Header() {
  const item_quantity = useSelector((state) => state.post.item_quantity);
  const add_to_card = useSelector((state) => state.post.ADD_TO_CARD);

  const [optSmModal, setOptSmModal] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);
  const dispatch = useDispatch();
  // const params = useParams();
  // const { id } = params;

  // const [addcarddata, setAddCardData] = useState([{}]);

  const toggleShow = () => setOptSmModal(!optSmModal);

  // const handlesubmit = () => {
  //   alert('error');
  // };
  const handleQuantityPicker = async (value) => {
    setItemQuantity(value);

    dispatch({
      type: GET_Item_Quantity,
      payload: value,
    });
  };
  const darta = [{}];

  // function addCarddata() {
  // fetch(`https://dummyjson.com/products/${id}`)
  // .then((response) => response.json())
  // .then((addcarddata) => console.log(addcarddata));
  // }

  // useEffect(() => {
  // addCarddata();
  // eslint - disable - next - line;
  // }, []);
  return (
    <Navbar collapseOnSelect expand='md' bg='white' varient='dark'className='Navbar_width' >
      <div className='container-fluid  header_bar  '>
        <Navbar.Brand to='/' className='navbar-brand  col-lg-3 col-md-3 col-sm-3'>
          <img src={logo1} className='img-fluid mx-2' width='100%' height={20} alt=' ' />
        </Navbar.Brand>

        <div className='d-sm-block d-md-none d-lg-none'>
          <div className='col-lg-2 col-md-2 col-sm-12 card_button  '>
            <button onClick={toggleShow} style={{ border: 'none', background: 'none' }} className= "   d-lg-block  d-md-block">
              Card
              <MdOutlineShoppingCart  />
              {item_quantity > 0 && <span className='price_quatity_show'>{item_quantity}</span>}
            </button>
          </div>
          <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
            <MDBModalDialog size='xl'>
              <MDBModalContent style={{ minHeight: '70vh', marginTop: '85px' }}>
                <MDBModalHeader>
                  <MDBModalTitle>
                    <p>Shopping Cart (1 Item)</p>
                  </MDBModalTitle>
                  <div
                    className='btn-close'
                    color='none'
                    onClick={toggleShow}
                    style={{ border: 'none', background: 'none' }}
                  >
                    <AiOutlineClose />
                  </div>
                </MDBModalHeader>
                <div className='row p-2 ' style={{ background: 'SILVER' }}>
                  <div className='col-lg-2'>Item Details</div>
                  <div className='col-lg-4'>Description</div>
                  <div className='col-lg-1'>Price</div>
                  <div className='col-lg-3'>Quantity</div>
                  <div className='col-lg-1'>Subtotal</div>
                </div>
                <div className='mb-3'>
                  {add_to_card.map((items) => {
                    return (
                      <>
                        <div className='row p-2 '>
                          <div className='col-lg-2'> {items.title}</div>
                          <div className='col-lg-4'> {items?.description}</div>
                          <div className='col-lg-1'> {items?.price}</div>
                          <div className='col-lg-3'>
                            {darta.map((data) => (
                              <div className='App'>
                                <QuantityPicker value={1} onChange={(value) => handleQuantityPicker(value)} />
                              </div>
                            ))}
                          </div>
                          <div className='col-lg-1'>{<span>{items.price * itemQuantity}</span>} </div>
                        </div>
                      </>
                    );
                  })}
                  {/* <p> {addcarddata.id}</p> */}
                </div>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </div>

        <div className='d-md-none d-lg-none '>
          <div className='col-lg-2 col-md-2 col-sm-12 dropdown '>
            <button className='dropbtn'>
              <span style={{ padding: '5px' }} > Sigin </span>
              <CiUser className='admin' />
            </button>
            <div className='dropdown-content'>
              <ul className='profile p-0' style={{ listStyleType: 'none' }}>
                <li className='profile_admin'>
                  <Link to='/'>
                    <CiUser style={{ color: 'white' }} />
                    Your Account
                  </Link>
                </li>
                <li className='profile_admin'>
                  <Link to='/contact'>
                    {' '}
                    <BsBoxSeam style={{ color: 'white' }} /> Orders
                  </Link>
                </li>
                <li className='profile_admin'>
                  <Link to='/explore' style={{ padding: '15px' }}>
                    <FcLike />
                    Shortlist
                  </Link>
                </li>
              </ul>
              <hr />
            </div>
          </div>
        </div>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />

        <div className='col-lg-5 col-md-5 col-sm-12 navbar_section'>
          <Navbar.Collapse id='responsive-navbar-nav' className='navbar justify-content-center'>
            <Nav className='me-auto  '>
              <Link to='/' className='text-dark px-4 '>
                Home
              </Link>
              <Link to='/contact' className='text-dark px-4 '>
                Contact
              </Link>
              <Link to='/explore' className='text-dark  px-4'>
                Explore
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>

        <div className='col-lg-2 col-md-2 d-none  d-md-block  d-lg-block  card_button  '>
          <button onClick={toggleShow} style={{ border: 'none', background: 'none' }}>
            Card
            <MdOutlineShoppingCart />
            {item_quantity > 0 && <span className='price_quatity_show'>{item_quantity}</span>}
          </button>
        </div>
        <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
          <MDBModalDialog size='xl'>
            <MDBModalContent style={{ minHeight: '70vh', marginTop: '85px' }}>
              <MDBModalHeader>
                <MDBModalTitle>
                  <p>Shopping Cart (1 Item)</p>
                </MDBModalTitle>

                <div
                  className='btn-close'
                  color='none'
                  onClick={toggleShow}
                  style={{ border: 'none', background: 'none' }}
                >
                  <AiOutlineClose />
                </div>
              </MDBModalHeader>
              <div className='row p-2 ' style={{ background: 'SILVER' }}>
                <div className='col-lg-2 col-md-2 col-sm-2'>Item Details</div>
                <div className='col-lg-4 col-md-4 col-sm-4'>Description</div>
                <div className='col-lg-1 col-md-1 col-sm-1 '>Price</div>
                <div className='col-lg-3 col-md-3 col-sm-3'>Quantity</div>
                <div className='col-lg-1  col-md-1  col-sm-1 '>Subtotal</div>
              </div>
              <div className='mb-3'>
                {add_to_card.map((items) => {
                  return (
                    <>
                      <div className='row p-2 '>
                        <div className='col-lg-2 col-md-2 col-sm-2'> {items.title}</div>
                        <div className='col-lg-4 col-md-4 col-sm-4'> {items?.description}</div>
                        <div className='col-lg-1 col-md-1 col-sm-1 '> {items?.price}</div>

                        <div className='col-lg-3'>
                          {darta.map((data) => (
                            <div className='App'>
                              <QuantityPicker value={1} onChange={(value) => handleQuantityPicker(value)} />
                            </div>
                          ))}
                        </div>

                        <div className='col-lg-1'>{<span>{items.price * itemQuantity}</span>} </div>
                      </div>
                    </>
                  );
                })}

                {/* <p> {addcarddata.id}</p> */}
              </div>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
     
  <div className='col-lg-2 col-md-2  dropdown  d-none d-md-block  p-0  d-lg-block   '>

     <button className='dropbtn'>
       <span > Sigin  </span>
       <CiUser className='admin' /> 
     </button>
     <div className='dropdown-content'>
       <ul className='profile p-0' style={{ listStyleType: 'none' }}>
         <li className='profile_admin'>
           <Link to='/'>
             <CiUser style={{ color: 'white' }} />
             Your Account
           </Link>
         </li>
         <li className='profile_admin'>
           <Link to='/contact'>
             {' '}
             <BsBoxSeam style={{ color: 'white' }} /> Orders
           </Link>
         </li>
         <li className='profile_admin'>
           <Link to='/explore' style={{ padding: '15px' }}>
             <FcLike />
             Shortlist
           </Link>
         </li>
       </ul>
       <hr />
     </div>
  
          </div>
        
      </div>
    </Navbar>
  );
}

export default Header;


//  <div className='col-lg-2 col-md-2  d-none d-md-block  p-0  d-lg-block '></div>
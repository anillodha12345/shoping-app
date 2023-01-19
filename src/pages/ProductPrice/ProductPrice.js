import React, { useEffect, useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { useParams } from 'react-router-dom';
import { ADD_TO_CARD } from '../../redux/type/types';
import Button from 'react-bootstrap/Button';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Product.scss';
import Header from '../../components/layout/Header/Header';
// import { QuantityPicker } from 'react-qty-picker';
import { Rate } from 'antd';
import { MdOutlinePayment } from 'react-icons/md';
import { useDispatch } from 'react-redux';
// import { GET_Item_Quantity } from '../../../../src/Redux/type/types';
import Form from 'react-bootstrap/Form';
function ProductPrice() {
  const params = useParams();
  const dispatch = useDispatch();

  // const posts = useSelector((state) => state.posts.products);

  const [datas, setData] = useState();
  // const [addtocard, setAddToCard] = useState([{}]);

  const { id } = params;

  function fetchdata() {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((datas) => setData(datas));
  }

  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line
  }, []);
  // const settings = {
  // dots: true,
  // lazyLoad: true,
  // infinite: true,
  // speed: 500,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  // initialSlide: 2,
  // };
  // const settingss = {
  // dots: true,
  // infinite: true,
  // speed: 500,
  // slidesToShow: 4,
  // slidesToScroll: 5,
  // };
  // const darta = [{}];
  // const handleQuantityPicker = async (value) => {
  //   setItemQuantity(value);

  //   dispatch({
  //     type: GET_Item_Quantity,
  //     payload: value,
  //   });
  // };

  const handle_Add_To_Card = async () => {
    // alert('the add ');
    dispatch({
      type: ADD_TO_CARD,
      payload: datas,
    });
  };

  return (
    <>
      <Header />
      <div className='container-fluid '>
        <div className='row  mt-3 side-thumnail side_slider'>
          <div className='col-lg-6  col-md-6 col-sm-12   '>
             {/* showThumbs={true} showStatus={false} showIndicators={false} infiniteLoop useKeyboardArrows transitionTime={1000} */}
            <Carousel showThumbs={true}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        // emulateTouch
        // autoPlay
        useKeyboardArrows
        transitionTime={1000}
        // axis="vertical"
            // selectedItem={1} 
            >
              {datas?.images?.map((x, i) => {
                return <img key={i} src={x} alt='not-show' width='100%' height='100%' />;
              })}
            </Carousel>
          </div>

          {/* </div> */}
          <div className='col-lg-6  col-md-6 col-sm-12 product-price  '>
            <div className='product-price mb-2 '>
              <p className='pro-price-font text-warning mb-2' >
                {datas?.title}
              </p>
              <p className='mb-2 discription'>
                <b>{datas?.description}</b>
              </p>
              <Rate allowHalf defaultValue={2.5} className='mb-2' />
              <p className=' mb-2'>Size</p>
              <Form.Select aria-label='Default select example' className='select_size mb-2'>
                <option value='1'>M(30)</option>
                <option value='2'>S(35)</option>
                <option value='3'>L(40)</option>
                <option value='3'>X(42)</option>
                <option value='3'>XXL(44)</option>
              </Form.Select>
              <div className='mb-2'>
                <span style={{ paddingRight: '15px' }}>Price :</span>

                <span className='text-warning' style={{ fontSize: '22px' }}>
                  ${datas?.price} USD
                </span>
                <span className='discount'>70% off</span>
              </div>
              {/* <div className='mb-3'>
                {darta.map((data) => (
                  <div className='App'>
                    <QuantityPicker value='1' min={0} onChange={(value) => handleQuantityPicker(value)} />
                  </div>
                ))}
              </div> */}
              <div className='buy'>
                
              <Button
                variant='secondary'
                size='lg'
                id='total'
                active
                className='add_to_card  ADD_TO_CARD '
                value='name'
                onClick={handle_Add_To_Card}
                // onClick={() => dispatch(addToCart(props.id))}
              >
     ADD TO CARD
                  </Button>
                  
             <Button variant='secondary' size='lg' active className='buy_now  add_to_card BUY_NOW'>
                  <MdOutlinePayment />
             BUY NOW
                </Button>
                  
                </div>
              {/* <h1>item_quantity data : {item_quantity}</h1> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPrice;

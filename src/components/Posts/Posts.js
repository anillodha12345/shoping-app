import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions/postAction';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Posts.scss';
import { Rate } from 'antd';
// import Card from "react-animated-3d-card";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts.products);

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line
    console.log('postspostspostspostspostsposts', posts);
  }, [dispatch, posts]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {posts?.map((items, index) => {
          return (
            <div className='card_width_style'>
            <div className='card card_width   border-0' key={index}>
              <NavLink to={`/ProductPrice/${items.id}`} className='items-card border-0'>
                <img className='card-img-tops  ' src={items.thumbnail} height={300} width='100%' alt='dvadhahdj' />
                <div className='card-body'>
                  <h5 className='card-title '> {items.title}</h5>
                  <p className='card-text'>{items.description}</p>
                  <NavLink className='btn btn-primary button-color' to={`/ProductPrice/${items.id}`}>
                    Go somewhere
                    </NavLink>
                  
                    
                </div>
              </NavLink>
            </div>

              </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Posts;

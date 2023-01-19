import React, { useEffect, useState } from 'react';
import Header from '../../components/layout/Header/Header';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Explore.scss';
import { ThreeDots } from 'react-loader-spinner';
import { Rate } from 'antd';
import images2 from "../../assets/images/icons8-heart.gif"
import images3 from "../../assets/images/icons8-heart (2).gif"



function Explore() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://testnetapi.clubrare.xyz/api/v1.5/explore/list/get?page_number=${page}&page_size=6`
      );
      if (res) {
        setItems(items.concat(res.data.data));
        console.log(res.data.data);
        setPage(page + 1);
      }
    } catch (err) {}
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <div className='container-fluid'>
        <InfiniteScroll
          dataLength={items.length} //This is important field to render the next data
          next={() => {
            fetchData();
          }}
          hasMore={true}
          loader={
            <h4>
              <ThreeDots
                height='80'
                width='80'
                radius='9'
                top='50px'
                color='black'
                ariaLabel='three-dots-loading'
                wrapperStyle={{ justifyContent: 'center' }}
                wrapperClassName=''
                visible={true}
              />
            </h4>
          }
        >
          <div className='row'>
            {items?.map((item, index) => {
              return (
                <div className='col-md-4' key={item.id}>

     
     
   

                  
                  
                  
                  <div className='cards  '>
                    <img className='card-img-top' src={item.file} width='100%' height='300px' alt='Card_image-cap' />
                      <span className='explore_gif'><img src={images2} alt="gifile" width="20px" /></span>
                    <div className='card-body'>
                      <h5 className='card-title'>{item.title}</h5>
                      <p className='card-text'>{item.description}</p>
                      {/* <Link to='/' className='btn btn-primary button-color'> */}
                        {/* Go somewhere */}
                      {/* </Link> */}
                      <span>  <Rate allowHalf defaultValue={2.5} className='mb-2' /></span>
                   
                      <span className='explore_images_gif'><img src={images3} alt="gifile"  width="20px"/></span>
                    </div>
                    </div>
                  
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default Explore;

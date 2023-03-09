import React from 'react'
import Carousel from '../Carousels/Carousel';
import Search from '../navegation/Search';

const Home = () => {
  return (
    <React.Fragment>
      <Search />
      <Carousel />
      <h1>Home</h1>
    </React.Fragment>
  )
}

export default Home
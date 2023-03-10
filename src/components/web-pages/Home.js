import React, { useEffect, useState } from 'react'
import Carousel from '../Carousels/Carousel';
import Search from '../navegation/Search';
import { AllMovies } from '../cards/Cards';

const Home = () => {

  return (
    <React.Fragment>
      <Search />
      <Carousel />
      <AllMovies />
    </React.Fragment>
  )
}

export default Home
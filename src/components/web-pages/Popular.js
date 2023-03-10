import React from 'react';
import Carousel from '../Carousels/Carousel';
import Search from '../navegation/Search';
import { PopularMovies } from '../cards/Cards-popular';

const Popular = () => {
  return (
    <React.Fragment>
      <Search />
      <Carousel />
      <PopularMovies />
    </React.Fragment>
  )
}

export default Popular
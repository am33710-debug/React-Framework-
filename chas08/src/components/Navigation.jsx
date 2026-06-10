import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return(
    <ul id='nav'>
      {/* <li><Link to='/'>Home</Link></li> */}
      {/* <li><Link to='/todos'>Todos</Link></li> */}
      <li><Link to='/gallery'>Gallery</Link></li>
      <li><Link to='/albums'>Albums</Link></li>
    </ul>
  )
}
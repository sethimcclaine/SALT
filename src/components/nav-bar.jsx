import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
//import { PATH } from './constants';
const PATH = {
  list: '/list',
  more: '/more',
}


const NavBar = (props) => (
  <ul>
    <li><Link to={ PATH.list }>List</Link></li>
    <li><Link to={ PATH.more }> More Info</Link></li>
    <li><Link to="/img">Image Resizer (PrintFection)</Link></li>
  </ul>
);

NavBar.propTypes = { };

export default NavBar;

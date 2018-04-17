import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { PATH } from 'src/constants';


const NavBar = (props) => (
  <ul>
    <li><Link to={ PATH.list }>Overview</Link></li>
    <li><Link to={ PATH.more }>More Info</Link></li>
    <li><Link to="/img">Image Resizer (PrintFection)</Link></li>
  </ul>
);

NavBar.propTypes = { };

export default NavBar;

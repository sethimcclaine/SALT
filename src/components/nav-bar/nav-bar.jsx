import './nav-bar.css'
import React from 'react';
//import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { PATH } from 'src/constants';


export const NavBar = (props) => (
  <ul className="nav-bar">
    <li><Link to={ PATH.overview }>Currency Overview</Link></li>
    <li><Link to={ PATH.more }>More Info</Link></li>
    <li><Link to={ PATH.img }>Image Resizer (PrintFection)</Link></li>
  </ul>
);

NavBar.propTypes = { };

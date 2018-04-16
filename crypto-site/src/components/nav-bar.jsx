import React from 'react';
import { Link } from 'react-router-dom';
//import { PATH } from './constants';
const PATH = {
  list: '/list',
  more: '/more',
}


export default (props) => (
  <ul>
    <li><Link to={ PATH.list }>List</Link></li>
    <li><Link to={ PATH.more }> More Info</Link></li>
    <li><Link to="/img">Image Resizer (PrintFection)</Link></li>
  </ul>
);

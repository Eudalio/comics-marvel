import React from 'react';

import { CSSNav } from './styles';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <CSSNav>
      <ul>
        <li><Link to="/">Comics</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/series">Series</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>  
    </CSSNav>
  );
}

export default Nav;
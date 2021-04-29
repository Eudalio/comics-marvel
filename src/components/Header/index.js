import React from 'react';

import Nav from '../../components/Nav';

import logoMarvel from '../../assets/img/logo_marvel.png';

import { CSSHeader } from './styles';

function Header() {
  return (
      <CSSHeader>
        <img src={logoMarvel} alt="Logo Marvel" />
        <Nav />
      </CSSHeader>
  );
}

export default Header;
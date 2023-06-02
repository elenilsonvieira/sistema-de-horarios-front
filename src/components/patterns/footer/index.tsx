import React from 'react';

import { Main, Nav, Divisor } from './styles';

export const Footer = () => {
  return (
    <Main>
      <Nav>
        <ul>
          <li>
            <a href="">Sobre o sistema</a>
          </li>
          <Divisor>|</Divisor>
          <li>
            <a href="">Contate os desenvolvedores</a>
          </li>
        </ul>
      </Nav>
    </Main>
  );
};

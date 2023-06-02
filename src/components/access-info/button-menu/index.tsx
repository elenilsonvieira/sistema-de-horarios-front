import React from 'react';
import { Link } from 'react-router-dom';
import { Main, StyledButton, TextButton } from './styles';

interface ButtonMenuProps {
  to: string;
  tittle: string;
  icon: string;
  discription: string;
}

export const ButtonMenu: React.FC<ButtonMenuProps> = (
  props: ButtonMenuProps,
) => {
  return (
    <Main>
      <StyledButton>
        <Link to={props.to}>
          <img src={props.icon} alt={props.tittle} />
          <TextButton>
            <b>{props.tittle}</b>
            <span>{props.discription}</span>
          </TextButton>
        </Link>
      </StyledButton>
    </Main>
  );
};

import React from 'react';

import { Main } from './styles';

interface ButtonEditProps {
  onClickFunction?: () => void;
}

export const ButtonDelete: React.FC<ButtonEditProps> = ({
  onClickFunction,
}: ButtonEditProps) => {
  return <Main onClick={onClickFunction}>excluir</Main>;
};

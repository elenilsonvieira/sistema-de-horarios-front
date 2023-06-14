import React from 'react';

import { Main } from './styles';

interface InputAreaProps {
  type?: string;
  value: any;
  placeholder: string;
  id: string;
  change?: (event: any) => void;
}

export const InputArea: React.FC<InputAreaProps> = ({
  type,
  placeholder,
  id,
  value,
  change,
}: InputAreaProps) => {
  return (
    <Main
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={change}
      value={value}
    ></Main>
  );
};

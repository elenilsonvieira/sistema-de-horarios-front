import React, { useEffect } from 'react';
import { Expandir } from '../../../assets/img';
import { RowVisualizer } from './styles';

interface RowVisualizerProps {
  propertyName: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLImageElement>
}

const Row: React.FC<RowVisualizerProps> = ({
  propertyName,
  children,
  onClick,
}: RowVisualizerProps) => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <RowVisualizer onClick={() => !toggle && onClick()}>
      <div>
        <span>{propertyName}</span>
        <label className={toggle ? 'active' : ''} onClick={handleToggle}>
          <img src={Expandir} alt="" />
        </label>
      </div>
      {toggle && children}
    </RowVisualizer>
  );
};

export { Row };

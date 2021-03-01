import React from 'react'
import './index.css';

export interface Props {
  text: string,
  getSum:(event: React.MouseEvent<HTMLButtonElement>) => void,
}
 
const Button: React.FC<Props> = ({text, getSum}) => {
  return (
    <button className="button" onClick={getSum}>{text}</button>
  );
}
 
export default Button;
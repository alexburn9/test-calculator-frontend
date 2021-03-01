import React from 'react'
import './index.css';

export interface Props {
  title: string,
}
 
const Title: React.FC<Props> = ({title}) => {
  return (
    <p className="title">{title}</p>
  );
}
 
export default Title;
import React from 'react'
import './index.css';

export interface Props {
  placeholder: string,
  readOnly: boolean,
  value: string,
  name: string,
  setNumber: (event: React.InputHTMLAttributes<HTMLInputElement>) => void,
}
 
const InputBox: React.FC<Props> = ({placeholder, readOnly, value, name, setNumber}) => {
  return (
    <input name={name} pattern="[0-9]*" className="inputBox" type="text" placeholder={placeholder} value={value} readOnly={readOnly} onChange={setNumber} />
  );
}
 
export default InputBox;
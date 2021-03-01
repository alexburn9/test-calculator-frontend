import React, { useState } from 'react';
import axios from "axios";
import Header from './components/Header';
import InputBox from './components/InputBox';
import Button from './components/Button';
import Separator from './components/Separator';
import Title from './components/Title';

import './App.css';

function App() {

  const [numbers, setNumbers] = useState({
    number1: '',
    number2: '',
    result: '',
  });

  const setNumber = (event: any) => {
    const validNum = event.target.validity.valid;
    if(!validNum) return;
    const value = event.target.value;
    const name = event.target.name;
    console.log(value, name)
    setNumbers((prev:any) => ({
      ...prev,
      [name]: value
    }))
  }

  const getSum = () => {
    const number1 = parseInt(numbers.number1);
    const number2 = parseInt(numbers.number2);

    axios.request({
      url: `http://localhost:8080/getSum`,
      method: 'post',
      data:  {
        number1,
        number2
      }
    }).then((response) => {
      const result = response.data.result;
      setNumbers((prev:any) => ({
        ...prev,
        result: result
      }))
    }).catch((err) => {
      console.log(err)
    })
  }

  const { number1, number2, result } = numbers;

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Title title="Enter the numbers" />
        <InputBox name="number1" placeholder="number 1" readOnly={false} value={number1} setNumber={setNumber} />
        <InputBox name="number2" placeholder="number 2" readOnly={false} value={number2} setNumber={setNumber} />
        <Button text="Sum" getSum={getSum} />
        <Separator />
        <Title title="Results" />
        <InputBox name="result" placeholder="1523" readOnly={true} value={result} setNumber={setNumber} />
      </div>
    </div>
  );
}

export default App;

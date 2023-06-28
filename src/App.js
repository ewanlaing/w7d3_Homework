import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";

function App() {

  const[number, setNumber] = useState(0);
  const[double, setDouble] = useState(0);

  useEffect (() => {
    console.log("Use effect triggered")
    setDouble(number * 2);
  }, []);

  const increment = (event) => {
    event.preventDefault();
    const newNumber = number + 1;
    setNumber(newNumber);
    // const newDouble = newNumber * 2; 
    // setDouble(newDouble);
  };

  const decrement = (event) => {
    event.preventDefault();
    const newNumber = number - 1;
    setNumber(newNumber);
    // const newDouble = newNumber * 2; 
    // setDouble(newDouble);
  };

  return (
    <>
    <p>{number}</p>
    <p>{double}</p>
    <form onSubmit={increment}>
      <input type="submit" value="Increment"/>
    </form>
    <form onSubmit={decrement}>
      <input type="submit" value="Decrement"/>
    </form>
  </>
  );
}

export default App;

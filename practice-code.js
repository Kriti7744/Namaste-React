import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function A({  }) {
  console.log('A');
  const [state, setState] = useState(0);

  useEffect(() => {
    setState((prevState) => prevState + 1);
  }, [state]);

  return <B/>;
}

function B() {
  console.log('B');
  return <C />;
}

function C() {
  console.log('C');
  return null;
}

function D() {
  console.log('D');
  return null;
}

function App() {
  console.log('App');
  return (
    <div>
      <A>
        <B />
      </A>
      <D />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function A() {
  console.log('render A')
  return null
}

function App() {
  const [_state, setState] = useState(false)
  console.log("hiiii")
  console.log('render App')
  return <div>
    <button onClick={() => {
      console.log('click')
      setState(true)
    }}>click me</button>
   { console.log("abc")}
    <A />
  </div>
}


  
const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(<App/>);




import React, { useRef, useState } from 'react';



const App = () => {
  
  const [myObj,setMyObj]=useState({
    key1 : "Value1",
    key2 : "Value2",
    key3 : "Value3"
  });

  const change = () => {
    setMyObj(
      prevObj=>({
        ...prevObj,
        key1: "New value 1"
      })
    )
  }
  
  return(
    <div>
      <h1>{myObj.key1}</h1>
      <h1>{myObj.key2}</h1>
      <h1>{myObj.key3}</h1>
      <button onClick={change}>Change</button>
    </div>
  );
};

export default App;

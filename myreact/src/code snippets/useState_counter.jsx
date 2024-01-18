import React, { useRef, useState } from 'react';



const App = () => {
  
  let [number,setNumber]=useState(0);

  
  return(
    <div>
      <h1>Number: {number}</h1>
      <button onClick={()=>setNumber(number+1)}>Count</button>
    </div>
  );
};
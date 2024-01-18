import React, { useRef } from 'react';



const App = () => {

  let firstName, lastName = useRef();

  const change = () => {
    let fName = firstName.value;
    let lName = lastName.value;

    alert("Hello " + fName + " " + lName);
  }
  
  
  return(
    <div>
      <input ref={(f)=>{firstName=f}} placeholder="First Name" /><br />
      <input ref={(l)=>{lastName=l}} placeholder="Last Name" /><br />
      <button onClick={change}>Click</button>
    </div>
  );
};
import React, { useRef } from 'react';



const App = () => {

  let myHeadLine = useRef();

  const change = () => {
    myHeadLine.current.classList.remove('text-success');
    myHeadLine.current.classList.add('text-danger');
  }
  
  
  return(
    <div>
      <h1 ref={myHeadLine} className='text-success'>HeadLine</h1>
      <button onClick={change}>Click</button>
    </div>
  );
};


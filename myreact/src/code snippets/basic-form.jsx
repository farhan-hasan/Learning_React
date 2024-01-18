import React, { useRef, useState } from 'react';

const App = () => {
  
  let [formObj,setFormObj] = useState({firstName:"",lastName:"",city:"",gender:""}); // initializing objects will cause the form set the values by default

  const onInput = (property,value) => {

    setFormObj(prevObj => ({
      ...prevObj,
      [property]:value
    }))
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formObj));
  }
  
  return(
    <div className='container'>
      <form onSubmit={formSubmit}>
        <input onChange={(e)=>{onInput("first_name",e.target.value)}} value={formObj.firstName} placeholder="First Name" /> <br />
        <input onChange={(e)=>{onInput("last_name",e.target.value)}} value={formObj.lastName} placeholder="Last Name" /> <br />
        <select onChange={(e)=>{onInput("city",e.target.value)}} value={formObj.city}>
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Sylhet">Sylhet</option>
        </select>
        <input onChange={(e)=>{onInput("gender",'Male')}} type="radio" name="gender" /> Male
        <input onChange={(e)=>{onInput("gender",'Female')}} type="radio" name="gender" /> Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

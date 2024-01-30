import React, { useRef, useState, useEffect } from 'react';
import 'milligram'
import './assets/css/style.css'

const App = () => {

  let [ip,setIp]=useState();
  let [ipAddress,setIpAddress]=useState("");

  const findIp = async () => {
    try {
    const response = await fetch(ip);
    const data = await response.text();
    setIpAddress(data);
    } catch (error) {
      alert("Failed to fetch IP Address");
    }
  }

  return(
    <div>
      <h1 className='title'>IP Finder</h1>
      <div className='text-field'>
        <input onChange={(e)=>setIp(e.target.value)} placeholder="Enter Domain Name" />
      </div>
      <button onClick={findIp} className='search-button'>Search</button>
      <h1>IP Address : {ipAddress}</h1>
      
    </div>
  );
};

export default App;

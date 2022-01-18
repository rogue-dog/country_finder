import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var [country,setCountry] = useState("");
  var c;
  useEffect(()=>{
    b();
  },[]);
  const b = async ()=>{
     
       var a = await fetch("https://ipapi.co/json")
         .then((res) => res.json())
         .then((data) => {
           return data;
         });
         setCountry(a['country_name']);
       
     
  }
  return (
    <div className="App">
    {country}
    </div>
  );
}

export default App;

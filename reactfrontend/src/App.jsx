import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[data,setData]=useState([]);
async function getData(){
       const response=await fetch('http://localhost:4007/data');
       const jsondata=await response.json();
       setData(jsondata.msg);

  // alert("Hii....inside get");
}
  return (
    <>
      <h2>Welocme to React App</h2>
      {JSON.stringify(data)}
      <button onClick={getData}>FetchData</button>
    </>
  )
}

export default App

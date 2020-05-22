import React, { useState } from "react";

function App() {
  const[text,setName]=useState(" ")
  const[heading,setHeading]=useState(" ")
  function handlingevent(event)
  {
    console.log(event.target.value);
  
  setName(event.target.value)
  }
 
  function HeadingText(event)
  {
    setHeading(text)
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={HeadingText}>
      <input onChange={handlingevent}
      type="text" 
      placeholder="What is your name"
      value={text}
       />
      <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default App;

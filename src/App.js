import React from 'react'
import './App.css';
import AboutUs from './pages/AboutUs';


function App() {
  const text = {
    title:'hello world',
    subtitle:'lorem lorem lorem'
  }

  return (
  
    <div className="App">
<AboutUs content = {text}/>
    </div>
  );
}

export default App;

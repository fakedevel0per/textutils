import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#041525';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <Navbar title="PratikReact Blogs" aboutText="My About"/> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      <TextForm heading="Enter the text to analyze Below" mode={mode}/>
      {/* <About/> */}
      </div>
      <Footer webLink="convertext.com"/>
    </>
  );
}

export default App;

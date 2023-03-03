import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import Footer from './components/Footer';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
   setAlert({
      msg: message,
      type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  }
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#041525';
      showAlert("Dark Mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm heading="Try TextUtils- Word counter, character counter, convert Text" toggleMode={toggleMode} showAlert={showAlert} mode={mode}/>
       
      </div>
      <Footer webLink="textutils.com" mode={mode}/>
    </>
  );
}

export default App;

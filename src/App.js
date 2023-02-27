import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
// import About from './components/About';

function App() {
  // const [alert, setAlert] = useState({msg: 'default', type: 'success'});
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
      document.title = "TextUtils: Home DarkMode";
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils: Home";
    }
  }
  return (
    <>
      {/* <Navbar title="PratikReact Blogs" aboutText="My About"/> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm heading="Enter the text to analyze Below" showAlert={showAlert} mode={mode}/>
      {/* <About/> */}
      </div>
      <Footer webLink="convertext.com"/>
    </>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

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
      <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Try TextUtils- Word counter, character counter, convert Text" toggleMode={toggleMode} showAlert={showAlert} mode={mode}/>}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </div>
      <Footer webLink="convertext.com" mode={mode}/>
      </Router>
    </>
  );
}

export default App;

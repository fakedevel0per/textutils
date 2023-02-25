import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* <Navbar title="PratikReact Blogs" aboutText="My About"/> */}
      <Navbar title="Convert Text" aboutText="About"/>
      <div className="container">
      <TextForm heading="Enter the text to analyze Below"/>
      </div>
      <Footer webLink="convertext.com"/>
    </>
  );
}

export default App;

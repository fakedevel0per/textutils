import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
    }
    const handleClearText = () =>{
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //to change the text
    //setText('new text here');
    // let arr = text.split(" ");
    
    // TO REMOVE EMPTY ELEMENTS IN ARRAY
    let arr = text.split(" ").filter(ele => ele !== "");

    // TO DISPLAY TIME IN MIN AND SECONDS
    let totalTimeInSec = arr.length * 0.5;
    let secTime = 0;
    let minTime = 0;
    let stringTime = "";
    if (totalTimeInSec < 60){
        stringTime = totalTimeInSec + " Seconds";
    }
    if(totalTimeInSec >= 60){
        secTime = totalTimeInSec % 60;
        minTime = (totalTimeInSec - secTime) / 60
        stringTime = minTime + " Minutes and " + secTime + " Seconds";
    }



  return (
    <>
    <div>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea> 
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-secondary mx-1" onClick={handleCopy}>Copy to Clipboard</button>
            <button className="btn btn-danger mx-1" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{arr.length} words and {text.length} characters</p>
        <p>It will take {stringTime} to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

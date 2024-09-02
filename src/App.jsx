import { useState } from "react";
import "./App.css";

function App(){
  const [length,setLength] = useState(8);
  const [includeUpperCase,setIncludeupperCase]=useState(true);
  const [includeLowerCase,setIncludeLowerCase]=useState(true);
  const [includenumber,setIncludeNumber]=useState(true);
  const [includeSymbols,setIncludeSymbols]=useState(true);
  const [password,setPassword] = useState("");

  function generatePassword(){
    let charset = "";
    if(includeUpperCase){
      charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(includeLowerCase){
      charset+="abcdefghijklmnopqrstuvwxyz";
    }
    if(includenumber){
      charset+="0123456789";
    }
    if(includeSymbols){
      charset+="!@#$%^&*_+?(></)~|";
    }
    // we are using for loop to run through index and printing like run length encoding
    let generatedPassword = "";
    for(let i=0;i<length;i++){
      const randomIndex = Math.floor(Math.random()*charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);

  }

  function copyToClipBoard(){
    // used to copy text
    navigator.clipboard.writeText(password);
    alert("password Copied");
  }



  /*
  useEffect(()=>
    {
      generatePassword();
    },[])
  */
  return(
    <>
       <div className="password-generator">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
          <label htmlFor="num">Password Length</label>
          <input type="number" id="num" value={length} onChange={(e)=>setLength(parseInt(e.target.value))} />
        </div>
        <div className="checkbox-group">
          {/* the condition will help change the state of checked  */}
          <input type="checkbox" id="upper" checked={includeUpperCase} onChange={(e)=>{setIncludeupperCase(e.target.checked)}}/>
          <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="lower" checked={includeLowerCase} onChange={(e)=>{setIncludeLowerCase(e.target.checked)}} />
          <label htmlFor="lower">Include Lowercase</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="numbers" checked={includenumber} onChange={(e)=>{setIncludeNumber(e.target.checked)}} />
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="symbols" checked={includeSymbols} onChange={(e)=>{setIncludeSymbols(e.target.checked)}} />
          <label htmlFor="symbols">Include Symbols</label>
        </div>
        <button className="generate-btn" onClick={generatePassword}>Generate Password</button>
        <div className="generated-password">
          <input type="text" value={password} readOnly/>
          <button className="copy-btn" onClick={copyToClipBoard}>Copy</button>
        </div>
       </div>
    </>
  )
}

export default App;
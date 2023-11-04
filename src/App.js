import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextTranform from './Components/TextTransform';
import Alert from './Components/Alert';

function App() {
  const [mode,setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = () => {
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
      showAlert("Dark mode has been Disabled","Success");

      setInterval(() => {
        document.title = "TextUtils is Amazing"
      }, 1500);
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor = "#152F61";
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark mode has been Enabled","Success");
    }
  }

  const red = () => {
    if(mode === "dark"){
      document.body.style.backgroundColor = "#91103F";
    }
  }

  const blue = () => {
    if(mode === "dark"){
      document.body.style.backgroundColor = "#152F61";
    }
  }

  const green = () => {
    if(mode === "dark"){
      document.body.style.backgroundColor = "#095E1D";
    }
  }
  return (
    <>
    
    <Navbar title="TextUtils" green={green} blue={blue} red={red} mode={mode} toggleMode={toggleMode}/>
    <Alert Alert={alert}/>
           

    <TextTranform mode={mode} Alert={showAlert} title="Enter the text to Manipulate"/>
        
   
    
    </>
    
  );
}

export default App;
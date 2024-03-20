import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';


import { useState } from 'react';


function App() {
  const [alert, SetAlert] = useState(null)
  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null)
    }, 3000);

  }
  const [mode, SetMode] = useState('light')


  const Emode = () => {
    if (mode === 'light') {
      SetMode('dark')
      document.body.style.backgroundColor = '#27276e'
      showAlert("Dark Mode has been Enebled", "success")
      document.body.style.color = 'white'
    }
    else {
      SetMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been Enebled', 'success')
      document.body.style.color = 'black'

    }
  }


  return (
    <>
      <Navbar name="Text-Editor" mode={mode} Emode={Emode} />
      <Alert alert={alert} />
      <div className='container'>
        <Form hedding="Enter the text to analyze below " showAlert={showAlert} mode={mode} />
      </div>


    </>
  )
}

export default App;

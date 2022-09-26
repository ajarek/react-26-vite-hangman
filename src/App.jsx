import { useState } from 'react'
import './App.css'
import {Keyboard} from './components/Keyboard/Keyboard'


function App() {
  const [text, setText]=useState([])
  const displayLetter=(e)=>{
     text.push(e.target.innerHTML)
     console.log(text);
   }
  return (
    <div className="App">
      <h1>Hangman</h1>
        <Keyboard
        onClick={displayLetter}
        />
        
    </div>
  )
}

export default App

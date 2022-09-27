import { useEffect, useState } from 'react'
import './App.css'
import {Keyboard} from './components/Keyboard/Keyboard'
import {PasswordGenerator} from './components/PasswordGenerator/PasswordGenerator'


function App() {
  
  
  const [currentPassword,setCurrentPassword]=useState("Ciemny jak tabaka w rogu")
  const [secretPassword,setSecretPassword]=useState(currentPassword.split('').map(letter=>
    letter===' '?letter=' ':letter='-'
   ).toString('').split(','))


 const  displayLetter=(e)=>{
  const inx =currentPassword.toUpperCase().indexOf(e.target.innerHTML)
 setSecretPassword(secretPassword.map((el,index,arr)=>{
 return index===inx?el=e.target.innerHTML:el
 }))
 
     
   }
  
  return (
    <div className="App">
      <h1>Hangman</h1>
      <PasswordGenerator
      password={currentPassword}
      children={secretPassword}
      />
        <Keyboard
        onClick={displayLetter}
        />
        
    </div>
  )
}

export default App

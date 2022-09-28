import { useEffect, useState } from 'react'
import './App.css'
import {Keyboard} from './components/Keyboard/Keyboard'
import {WrapperPasswordGenerator} from './components/WrapperPasswordGenerator/WrapperPasswordGenerator'
import {PasswordGenerator} from './components/PasswordGenerator/PasswordGenerator'
import {HangmanImage} from './components/HangmanImage/HangmanImage'
const newPassword=PasswordGenerator()
console.log(newPassword);
function App() {
 
  
  const [currentPassword,setCurrentPassword]=useState((newPassword).toLocaleUpperCase())
  const [secretPassword,setSecretPassword]=useState(currentPassword.split('').map(letter=> letter===' '?letter=' ':letter='-').toString('').split(','))
  const [info ,setInfo]=useState('')


 const  displayLetter=(e)=>{
  const indices = currentPassword.split('').map((el, i) => el === e.target.innerHTML ? i : '').filter(String)
 setSecretPassword(secretPassword.map((el,inx)=>indices.includes(inx)?el=e.target.innerHTML:el
 
 ))
  
 }
useEffect(()=>{
  if(currentPassword===secretPassword.join('')){
    setInfo('WIN')
    setTimeout(()=>{
      window.location.reload();
    },2000)
  }
  
},[secretPassword])

  return (
    <div className="App">
      <h1>Hangman</h1>
      <h2>{info}</h2>
      <WrapperPasswordGenerator
      password={currentPassword}
      children={secretPassword}
      />
      <HangmanImage
      numer={0}
      />
        <Keyboard
        onClick={displayLetter}
        />
        
    </div>
  )
}

export default App

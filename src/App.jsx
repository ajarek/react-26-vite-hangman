import { useEffect, useState } from "react"
import "./App.css"
import { Keyboard } from "./components/Keyboard/Keyboard"
import { WrapperPasswordGenerator } from "./components/WrapperPasswordGenerator/WrapperPasswordGenerator"
import { PasswordGenerator } from "./components/PasswordGenerator/PasswordGenerator"
import { HangmanImage } from "./components/HangmanImage/HangmanImage"
const newPassword = PasswordGenerator()

function App() {
  const [currentPassword, setCurrentPassword] = useState(
    newPassword.toLocaleUpperCase()
  )
  const [secretPassword, setSecretPassword] = useState(
    currentPassword
      .split("")
      .map((letter) => (letter === " " ? (letter = " ") : (letter = "-")))
      .toString("")
      .split(",")
  )
  const [info, setInfo] = useState("")
  const [nrImage,setNrImage]=useState(5)

  const displayLetter = (e) => {
    if(!currentPassword.includes(e.target.innerHTML)){
      setNrImage(nrImage+1);
      if(nrImage===9){
        setInfo('Game over')
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      }
    }
    e.target.style.color='red'
    const indices = currentPassword
      .split("")
      .map((el, i) => (el === e.target.innerHTML ? i : ""))
      .filter(String)
    setSecretPassword(
      secretPassword.map((el, inx) =>
        indices.includes(inx) ? (el = e.target.innerHTML) : el
      )
    )
  }
  useEffect(() => {
    if (currentPassword === secretPassword.join("")) {
      setInfo("WIN")
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }
  }, [secretPassword])

  return (
    <div className="App">
      <h1>Hangman</h1>
      <h2>{info}</h2>
      <WrapperPasswordGenerator
        password={currentPassword}
        children={secretPassword}
      />
      <div className="wrapperBoard">
        <HangmanImage numer={nrImage} />
        <Keyboard onClick={displayLetter} />
      </div>
    </div>
  )
}

export default App

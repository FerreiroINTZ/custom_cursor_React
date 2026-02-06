import Cursor from "./cursor/cursor"
import Element from "./components/customElement/customElement"
import { useState } from "react"

function App() {

  const [cursorType, setCursortype] = useState(true)

  function changeCursor(){
    setCursortype(!cursorType)
  }

  return (
    <>
      <h1>Currsor Personalizdado</h1>
      <Element dataType={"link"}/>
      <Element dataType={"video"}/>
      <Element dataType={"toggle-off"} func={changeCursor} />
      <Element />
      <Cursor cursorType={cursorType}/>
    </>
  )
}

export default App
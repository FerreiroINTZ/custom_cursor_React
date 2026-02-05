import Cursor from "./cursor/cursor"
import Element from "./components/customElement/customElement"

function App() {
  return (
    <>
      <h1>Currsor Personalizdado</h1>
      <Element dataType={"link"}/>
      <Element dataType={"video"}/>
      <Element/>
      <Cursor />
    </>
  )
}

export default App
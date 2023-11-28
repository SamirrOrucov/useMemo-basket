import { useState ,useMemo} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const edv=useMemo(() => calcEdv(count), [count])
  function calcEdv(count) {
    return (count*0.18)/10
  }
  function increase() {
    setCount(count+1)
    
  }
  function handleToglle() {
    setToggle(!toggle)
    atClass()
    
  }
  function atClass() {
    document.body.classList.toggle("night")
  }

  return (
    <>
    <p>Counter: {count}</p>
    <button onClick={increase}>+</button>
    <h1>{edv}</h1>
    <button onClick={handleToglle}> {toggle? "(" : " +"}</button>
    </>
  )
}

export default App

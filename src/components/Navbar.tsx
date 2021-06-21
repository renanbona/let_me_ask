import { useState } from "react"

export function Navbar() {
  let [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function testing() {
    if (counter >= 5) {
      return (<p> Testing if statement</p>)
    } else {
      return (<p> Counter is less than 5</p>)
    }
  }

  return (
    <div>
      <button onClick={increment}>{counter}</button>

      {testing()}
    </div>
  )
}
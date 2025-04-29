import './App.css'
import { Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">{/* navigation here */}</div>
      <div id="main-section"><Routes><Route to="/blue">Blue</Route><Route to="/red">Red</Route></Routes></div>
    </div>
  )
}

export default App

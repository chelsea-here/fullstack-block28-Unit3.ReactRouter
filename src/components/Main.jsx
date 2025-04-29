import { Routes, Route } from "react-router-dom"
import Blue from './Blue'
import Red from './Red'
import Home from './Home'

export default function Main() {
  return (
    <div id="main-section">
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blue" element={<Blue />}></Route>
      <Route path="/red" element={<Red />}></Route>
    </Routes>
  </div>
  )
}
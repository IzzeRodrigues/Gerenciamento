import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './telas/home'
import Create from './telas/criar'
import Func from './telas/func'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes initial>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/funcionarios" element={<Func/>}></Route>
        <Route path="/criar" element={<Create/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

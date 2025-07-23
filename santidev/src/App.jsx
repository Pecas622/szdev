// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Servicios from "./pages/Servicios.jsx"
import Proyectos from "./pages/Proyectos.jsx"
import Contacto from "./pages/Contacto.jsx"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

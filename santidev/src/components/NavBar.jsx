// src/components/NavBar.jsx
import { Link } from "react-router-dom"
import "../css/NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">SZ Web Studio</h1>
            <ul className="nav-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar

import "../css/Footer.css"
import { Link } from "react-router-dom"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contenedor">
                {/* BLOQUE 1 - INFO */}
                <div className="footer-info">
                    <h3>SZ Web Studio</h3>
                    <p>Transformo ideas en sitios web modernos y funcionales 🚀</p>
                </div>

                {/* BLOQUE 2 - NAVEGACIÓN */}
                <div className="footer-links">
                    <h4>Secciones</h4>
                    <ul>
                        <li><Link to="/servicios">Servicios</Link></li>
                        <li><Link to="/proyectos">Proyectos</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>

                {/* BLOQUE 3 - REDES */}
                <div className="footer-redes">
                    <h4>Seguime</h4>
                    <div className="iconos-redes">
                        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div className="footer-copy">
                <p>© 2025 Santiago Zorrilla - SZ Web Studio. Todos los derechos reservados.</p>
                <p>Hecho con 💻 en Mendoza, Argentina</p>
            </div>
        </footer>
    )
}

export default Footer

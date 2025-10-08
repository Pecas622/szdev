import "../css/Home.css"
import { Link } from "react-router-dom"
import { FaShoppingCart, FaGraduationCap, FaCode, FaShareAlt, FaSearch, FaPalette, FaCalendarAlt, FaBullseye, FaLightbulb } from "react-icons/fa"

const Home = () => {
    return (
        <div className="home-container">

            {/* ===== HERO ===== */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Conquista el mercado: Permite que te encuentren</h1>
                    <p className="subtitulo">
                        Potenciamos tu visibilidad online para atraer más clientes directamente a tu puerta.
                    </p>
                    <Link to="/contacto" className="btn-contacto">Más Info</Link>
                </div>
                <div className="hero-img">
                    <img src="./ecomerce.png" alt="Marketing Digital" />
                </div>
            </section>

            {/* ===== SERVICIOS ===== */}
            <section className="servicios">
                <h2>Nuestros Servicios</h2>
                <div className="servicios-grid">
                    <div className="servicio-card">
                        <FaShoppingCart className="icono" />
                        <h3>E-Commerce</h3>
                        <p>Creamos tu tienda online profesional y segura.</p>
                    </div>
                    <div className="servicio-card">
                        <FaGraduationCap className="icono" />
                        <h3>Plataforma E-learning</h3>
                        <p>Tu propia academia online para cursos y capacitaciones.</p>
                    </div>
                    <div className="servicio-card">
                        <FaCode className="icono" />
                        <h3>Desarrollo Web</h3>
                        <p>Sitios modernos y a medida de tu negocio.</p>
                    </div>
                    <div className="servicio-card">
                        <FaSearch className="icono" />
                        <h3>SEO</h3>
                        <p>Posicionamos tu web en Google para ganar visibilidad.</p>
                    </div>
                    <div className="servicio-card">
                        <FaPalette className="icono" />
                        <h3>Branding</h3>
                        <p>Manual de marca y diseño visual para tu negocio.</p>
                    </div>
                    <div className="servicio-card">
                        <FaCalendarAlt className="icono" />
                        <h3>Gestión de Redes</h3>
                        <p>Calendario y publicaciones para mantenerte activo.</p>
                    </div>
                    {/* Nuevo servicio: Trabajo por Objetivos */}
                    <div className="servicio-card">
                        <FaBullseye className="icono" />
                        <h3>Trabajo mediante Objetivos</h3>
                        <p>Planificamos con OKR para alcanzar resultados medibles y efectivos.</p>
                    </div>
                    {/* Nuevo servicio extra: Consultoría Digital */}
                    <div className="servicio-card">
                        <FaLightbulb className="icono" />
                        <h3>Consultoría Digital</h3>
                        <p>Te asesoramos en estrategias para potenciar tu presencia online.</p>
                    </div>
                </div>
            </section>

            {/* ===== VENTAS ===== */}
            <section className="ventas">
                <div className="ventas-content">
                    <h2>Impulsá las Ventas de tu Negocio</h2>
                    <p className="ventas-subtitulo">
                        Transformamos tu presencia online en una máquina de atraer clientes y generar ventas.
                    </p>

                    <div className="ventas-grid">
                        <div className="ventas-card">
                            <h3>📈 Más Visibilidad</h3>
                            <p>Posicionamos tu marca para que tus clientes te encuentren fácilmente en Google y redes sociales.</p>
                        </div>
                        <div className="ventas-card">
                            <h3>🛒 Más Clientes</h3>
                            <p>Diseñamos tu web con llamadas a la acción estratégicas que convierten visitas en ventas.</p>
                        </div>
                        <div className="ventas-card">
                            <h3>💰 Más Ingresos</h3>
                            <p>Con herramientas de marketing digital potenciamos tus ventas y aumentamos tu facturación.</p>
                        </div>
                    </div>

                    <Link to="/contacto" className="btn-contacto grande">Quiero vender más</Link>
                </div>
            </section>
        </div>
    )
}

export default Home

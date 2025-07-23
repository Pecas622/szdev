import "../css/Home.css"
import { Link } from "react-router-dom"
import { FaRocket, FaMobileAlt, FaPaintBrush } from "react-icons/fa"

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Diseño Web Profesional</h1>
                    <p className="subtitulo">Convertí tu idea en una página impactante y eficaz</p>
                    <Link to="/contacto" className="btn-contacto">Solicitá tu presupuesto</Link>
                </div>
                <div className="hero-img">
                    <div id="carouselEjemplos" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./public/ecomerce.png" className="d-block w-100" alt="Ejemplo 1" />
                            </div>
                            <div className="carousel-item">
                                <img src="./public/ecomerce2.jpeg" className="d-block w-100" alt="Ejemplo 2" />
                            </div>
                            <div className="carousel-item">
                                <img src="./public/img/botinespag.png" className="d-block w-100" alt="Ejemplo 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselEjemplos" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Anterior</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselEjemplos" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="beneficios">
                <h2>¿Por qué elegirnos?</h2>
                <div className="beneficio-cards">
                    <div className="card">
                        <FaRocket className="icono" />
                        <h3>Velocidad</h3>
                        <p>Tu web cargará rápido para una mejor experiencia de usuario.</p>
                    </div>
                    <div className="card">
                        <FaMobileAlt className="icono" />
                        <h3>Responsive</h3>
                        <p>Adaptada a todos los dispositivos: celular, tablet o PC.</p>
                    </div>
                    <div className="card">
                        <FaPaintBrush className="icono" />
                        <h3>Diseño a Medida</h3>
                        <p>Nos adaptamos a tu estilo y necesidades.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

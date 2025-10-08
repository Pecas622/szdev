import "../css/Contacto.css"
import { FaUser, FaEnvelope, FaGlobe, FaWhatsapp, FaTag, FaCommentDots, FaPhone, FaMapMarkerAlt, FaHeadset } from "react-icons/fa"

const Contacto = () => {
    return (
        <section className="contacto">
            {/* FORMULARIO */}
            <div className="formulario-section">
                <h2 className="titulo-contacto">Contáctanos</h2>
                <p className="subtitulo-contacto">
                    Envíanos tu mensaje y a la brevedad estaremos contestando
                </p>

                <form className="formulario-contacto">
                    <div className="fila">
                        <div className="input-group">
                            <FaUser className="icono-input" />
                            <input type="text" placeholder="Nombre" required />
                        </div>
                        <div className="input-group">
                            <FaUser className="icono-input" />
                            <input type="text" placeholder="Apellido" required />
                        </div>
                    </div>

                    <div className="fila">
                        <div className="input-group">
                            <FaGlobe className="icono-input" />
                            <input type="text" placeholder="País" required />
                        </div>
                        <div className="input-group">
                            <FaEnvelope className="icono-input" />
                            <input type="email" placeholder="Email" required />
                        </div>
                    </div>

                    <div className="fila">
                        <div className="input-group">
                            <FaWhatsapp className="icono-input" />
                            <input type="text" placeholder="WhatsApp" required />
                        </div>
                        <div className="input-group">
                            <FaTag className="icono-input" />
                            <input type="text" placeholder="Asunto" required />
                        </div>
                    </div>

                    <div className="input-group textarea">
                        <FaCommentDots className="icono-input" />
                        <textarea placeholder="Mensaje" rows="5" required></textarea>
                    </div>

                    <button type="submit" className="btn-enviar">
                        Enviar
                    </button>
                </form>
            </div>

            {/* INFO DE CONTACTO */}
            <div className="info-contacto">
                <div className="card-contacto">
                    <FaPhone className="icono-card" />
                    <h3>Teléfono</h3>
                    <p>+54 9 261 629 8065</p>
                </div>

                <div className="card-contacto">
                    <FaEnvelope className="icono-card" />
                    <h3>Email</h3>
                    <p>info@espiritudigitalok.com</p>
                </div>

                <div className="card-contacto">
                    <FaMapMarkerAlt className="icono-card" />
                    <h3>Location</h3>
                    <p>Mendoza, Argentina</p>
                </div>

                <div className="card-contacto">
                    <FaHeadset className="icono-card" />
                    <h3>Soporte WhatsApp</h3>
                    <p>+54 9 261 629 8065</p>
                </div>
            </div>
        </section>
    )
}

export default Contacto

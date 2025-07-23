import "../css/Contacto.css"

const Contacto = () => {
    return (
        <div className="container contacto">
            <h2>Contacto</h2>
            <form className="formulario-contacto">
                <input type="text" placeholder="Tu nombre" required />
                <input type="email" placeholder="Tu correo" required />
                
                {/* NUEVO CAMPO: Select para el motivo de la consulta */}
                <select required defaultValue="">
                    <option value="" disabled>Seleccioná el motivo de tu consulta</option>
                    <option value="presupuesto">Presupuesto</option>
                    <option value="asesoramiento">Asesoramiento</option>
                    <option value="soporte">Soporte técnico</option>
                    <option value="otro">Otro</option>
                </select>

                <textarea placeholder="Escribime tu consulta..." rows="5" required></textarea>

                <div className="form-check" style={{ margin: "1rem 0" }}>
                    <input type="checkbox" className="form-check-input" id="recordarme" />
                    <label className="form-check-label" htmlFor="recordarme">Recordarme</label>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto

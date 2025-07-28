import "../css/Servicios.css"

const categorias = [
    {
        nombre: "Web Corporativa",
        servicios: [
            { titulo: "Página institucional", descripcion: "Ideal para mostrar quién sos y qué hacés." },
            { titulo: "Landing page", descripcion: "Promociones o campañas específicas." },
            { titulo: "Portafolio", descripcion: "Mostrá tus trabajos o servicios de forma profesional." },
        ],
    },
    {
        nombre: "E-commerce",
        servicios: [
            { titulo: "Tienda online", descripcion: "Venta de productos con carrito de compras." },
            { titulo: "Optimización para celulares", descripcion: "Y posicionamiento básico." },
            { titulo: "Integración con redes, WhatsApp, email", descripcion: "" },
        ],
    },
    {
        nombre: "Mantenimiento y Soporte",
        servicios: [
            { titulo: "Actualización de contenido", descripcion: "Modificar textos, imágenes y productos." },
            { titulo: "Soporte técnico", descripcion: "Resolución de problemas y consultas." },
            { titulo: "Monitoreo y backups", descripcion: "Seguridad y respaldo regular de tu sitio." },
        ],
    },
]

const paquetes = [
    {
        nombre: "Pack Básico",
        serviciosIncluidos: ["Página institucional", "Integración con redes sociales"],
        precio: "$40 USD",
    },
    {
        nombre: "Pack Completo",
        serviciosIncluidos: ["Tienda online", "Optimización móvil", "Soporte técnico"],
        precio: "$60 USD",
    },
    {
        nombre: "Pack Premium",
        serviciosIncluidos: ["Landing page", "Portafolio", "Integración completa", "SEO básico"],
        precio: "$100 USD",
    },
    {
        nombre: "Pack Mantenimiento",
        serviciosIncluidos: ["Actualización de contenido", "Soporte técnico", "Monitoreo y backups"],
        precio: "$30 USD / mes",
    },
]

const Servicios = () => {
    return (
        <div className="container servicios">
            <h2>Servicios</h2>
            <p>Ofrezco soluciones digitales personalizadas para que tu negocio crezca.</p>

            {categorias.map((cat, i) => (
                <section key={i} className="categoria-servicios">
                    <h3>{cat.nombre}</h3>
                    <ul className="lista-servicios">
                        {cat.servicios.map(({ titulo, descripcion }, j) => (
                            <li key={j}>
                                <strong>{titulo}</strong>
                                {descripcion && <> – {descripcion}</>}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

            <section className="paquetes">
                <h3>Paquetes y ofertas</h3>
                <div className="lista-paquetes">
                    {paquetes.map(({ nombre, serviciosIncluidos, precio }, i) => (
                        <div key={i} className="paquete">
                            <h4>{nombre}</h4>
                            <ul>
                                {serviciosIncluidos.map((serv, k) => (
                                    <li key={k}>{serv}</li>
                                ))}
                            </ul>
                            <p className="precio">{precio}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Servicios

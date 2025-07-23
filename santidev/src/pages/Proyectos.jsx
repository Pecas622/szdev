import "../css/Proyectos.css"

const proyectos = [
    {
        nombre: "Tradición Mate",
        descripcion: "E-commerce de productos tradicionales con estilo vintage.",
        link: "https://tradicion-mate.netlify.app/"
    },
    {
        nombre: "Grupo Z",
        descripcion: "Sitio institucional para empresa de control de plagas.",
        link: "https://grupoz.netlify.app/"
    },
    {
        nombre: "Portfolio Personal",
        descripcion: "Sitio web personal que exhibe proyectos y habilidades, desarrollado con React y Firebase para una experiencia dinámica y moderna.",
        link: "https://pecas622.github.io/portfolio/"
    }
]

const Proyectos = () => {
    return (
        <div className="container proyectos">
            <h2>Mis Proyectos</h2>
            <div className="grid-proyectos">
                {proyectos.map((p, i) => (
                    <div key={i} className="card-proyecto">
                        <h3>{p.nombre}</h3>
                        <p>{p.descripcion}</p>
                        <a href={p.link} target="_blank" rel="noreferrer">Ver proyecto</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Proyectos

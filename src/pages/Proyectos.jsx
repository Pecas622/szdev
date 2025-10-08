import "../css/Proyectos.css";

const pasosDigitalizacion = [
    {
        titulo: "Diseño",
        descripcion: "Creamos la identidad visual, colores y estilo de tu proyecto.",
        icono: "🎨",
    },
    {
        titulo: "Página Web",
        descripcion: "Desarrollamos un sitio web moderno, funcional y adaptado a tu negocio.",
        icono: "💻",
    },
    {
        titulo: "Redes Sociales",
        descripcion: "Posicionamos tu proyecto y generamos interacción con tu público.",
        icono: "📱",
    }
];

const proyectos = [
    {
        nombre: "lamateradelrey",
        descripcion: "E-commerce de productos tradicionales con estilo vintage.",
        link: "https://lamateradelrey.com.ar/",
        imagen: "./mate.jpeg"
    },
    {
        nombre: "Grupo Z",
        descripcion: "Sitio institucional para empresa de control de plagas.",
        link: "https://grupoz.netlify.app/",
        imagen: "./logo.png"
    },
    {
        nombre: "heyshop",
        descripcion: "Portfolio con proyectos y habilidades, desarrollado con React y Firebase.",
        link: "https://heyshop.com.ar/",
        imagen: "./iphone16promax.jpeg"
    }
]

const Proyectos = () => {
    return (
        <div className="proyectos">

            {/* SECCIÓN DIGITALIZACIÓN */}
            <div className="digitalizacion">
                <h2>Transformamos tu idea en presencia digital</h2>
                <div className="grid-digitalizacion">
                    {pasosDigitalizacion.map((p, i) => (
                        <div key={i} className="card-digitalizacion">
                            <div className="icono">{p.icono}</div>
                            <h3>{p.titulo}</h3>
                            <p>{p.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SECCIÓN PROYECTOS */}
            <h2>Mis Proyectos</h2>
            <p className="intro">Algunos de los trabajos que realicé 👇</p>

            <div className="grid-proyectos">
                {proyectos.map((p, i) => (
                    <a
                        key={i}
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="card-proyecto"
                    >
                        <img src={p.imagen} alt={p.nombre} />
                        <div className="overlay">
                            <h3>{p.nombre}</h3>
                            <p>{p.descripcion}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Proyectos;

import{Link}  from 'react-router-dom'
function Encabezado(){ 
    return (
        <div>
            <h1>Programacion 3</h1>
            <ul>
                <li>
                <Link to = "/inicio">inicio</Link>
                </li>
                <li>
                <Link to = "/Contacto">Contacto</Link>
                </li>
                <li>
                <Link to = "/Productos">Productos</Link>
                </li>
                <hr/>
            </ul>
        </div>
    )
}
export default Encabezado;
import './ListaOpciones.css'

const ListaOpciones = (props) => {

    const categorias = [
        "Front End",
        "Back End",
        "Innovación y Gestión"
    ]

    
    const manejarCambio = (e) => {
        console.log("Cambio", e.target.value)
        props.actualizarCategoria(e.target.value)
    }
    return <div className='lista-opciones'>
        <label>Categoría</label>
        <select value={props.valor} onChange={manejarCambio}> 
            <option value="" disabled selected>Seleccionar categoría</option>          
            { categorias.map( (categorias, index) => <option key={index} value={categorias}>{categorias}</option>
             ) }
        </select>
    </div>

}

export default ListaOpciones
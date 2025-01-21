import './ListaOpciones.css'

const ListaOpciones = (props) => {

    const categoria = [
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
            <option value="" disabled>
                Seleccionar categoría
            </option>
            {categoria.map((categoria, index) =>
                <option key={index} value={categoria}>{categoria}</option>
            )}
        </select>
    </div>

}

export default ListaOpciones
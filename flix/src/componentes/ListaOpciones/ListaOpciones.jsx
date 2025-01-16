import './ListaOpciones.css'

const ListaOpciones = () => {

    const categorias = [
        "Front End",
        "Back End",
        "Innovación y Gestión"
    ]

    return <div className='lista-opciones'>
        <label>Categoría</label>
        <select> 
            <option value="" disabled selected>Seleccionar categoría</option>          
            { categorias.map( (categorias, index) => <option key={index}>{categorias}</option>
             ) }
        </select>
    </div>

}

export default ListaOpciones
import '../Formulario/Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'


const Formulario = () => {

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        console.log("Manejar envio", evento)
    }
    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Completa el formulario para agregar el video</h2>
            <CampoTexto titulo="Url del video" placeholder="Ingrese url..." required={true} />
          {/*} { <CampoTexto titulo="Categoría" placeholder="Seleccione categoría..." />  }   */}       
            <ListaOpciones required/>
            <Boton>
                Listo!
                </Boton>
        </form>
    </section>
}

export default Formulario
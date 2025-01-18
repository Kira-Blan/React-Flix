import { useState } from 'react'
import '../Formulario/Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton';

const Formulario = (props) => {

    const [titulo, actuarlizarTitulo] = useState('')
    const [url, actualizarUrl] = useState('')
    const [categoria, actualizarCategoria] = useState("")

    const { registrarVideo } = props

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log('Datos enviados:', { titulo, url, categorias })

        if (!titulo || !url || !categoria) {
            alert("Por favor completar todos los campos")
            return
        }

        const datosAEnviar = {
            titulo,
            url,
            categoria,
            video
        }        
        console.log(datosAEnviar)

        props.agregarVideo(datosAEnviar)

        actuarlizarTitulo('')
        actualizarUrl('')
        actualizarCategoria('')
    }
   

    
    {/*const manejarCerrar = () => {       
        cerrarFormulario()
    }*/}

    
    

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Completa el formulario para agregar el video</h2>
                <CampoTexto
                    titulo="Título del video"
                    placeholder="Ingrese el título del video"
                    required
                    valor={titulo} // Pasar el valor desde el padre
                    actualizarValor={actuarlizarTitulo} // Pasar la función de actualización desde el padre
                />
                <CampoTexto
                    titulo="Url del video"
                    placeholder="Ingrese url"
                    required
                    valor={url} // Pasar el valor desde el padre
                    actualizarValor={actualizarUrl} // Pasar la función de actualización desde el padre
                />
                <ListaOpciones
                    valor={categoria}
                    actualizarCategoria={actualizarCategoria}
                   
                />
                <Boton>Listo!</Boton>                
           
            </form>                                                    
        </section>
    );
};

export default Formulario



import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import '../Formulario/Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton';

const Formulario = (props) => {

    const [titulo, actuarlizarTitulo] = useState('')
    const [url, actualizarUrl] = useState('')
    const [categoria, actualizarCategoria] = useState("")

    const { agregarVideo } = props

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        evento.target.reset()
        actuarlizarTitulo('')
        actualizarUrl('')
        actualizarCategoria('')

        console.log('Datos enviados:', { titulo, url, categoria })

        if (!titulo || !url || !categoria) {
            alert("Por favor completar todos los campos")
            return
        }

        const nuevoVideo = {
            id: uuidv4(),
            titulo,
            url,
            categoria
        }
        console.log('Nuevo video a agregar:', nuevoVideo)

        agregarVideo(nuevoVideo)
        console.log('Video agregado')
    }


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
                <Boton type="submit">Listo!</Boton>

            </form>
        </section>
    );
};

export default Formulario



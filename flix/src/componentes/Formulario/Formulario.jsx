import { useState } from 'react'
import '../Formulario/Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton';

const Formulario = () => {

    const [titulo, actuarlizarTitulo] = useState('')
    const [url, actualizarUrl] = useState('')
    const [categorias, actualizarCategoria] = useState("")

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log('Datos enviados:', { titulo, url, categorias })
        let datosAEnviar = {
            titulo,
            url,
            categorias
        }
        console.log(datosAEnviar)

        actuarlizarTitulo('')
        actualizarUrl('')
        actualizarCategoria('')
    };

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
                    valor={categorias}
                    actualizarCategoria={actualizarCategoria}
                />
                <Boton>Listo!</Boton>
            
            <Boton onClick={(e) => {
                e.preventDefault()
                cerrarFormulario()
            }}
            >
                Cerrar
            </Boton>
            </form>
        </section>
    );
};

export default Formulario


{/*import { useState } from 'react'
import '../Formulario/Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'


const Formulario = () => {

    const [titulo, actuarlizarTitulo] = useState("")
    const [url, actualizarUrl] = useState("")

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        console.log("Manejar envio", { titulo, url })
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Completa el formulario para agregar el video</h2>
            <CampoTexto
                titulo="Título del video"
                placeholder="Ingrese el título del video..."
                required
                valor={titulo}
                actualizarValor={actuarlizarTitulo}
            />
            <CampoTexto
                titulo="Url del video"
                placeholder="Ingrese url..."
                required
                valor={url}
                actualizarValor={actualizarUrl} />
            <ListaOpciones />
            <Boton>
                Listo!
            </Boton>
            <Boton>
                Cerrar
            </Boton>
        </form>
    </section>
}

export default Formulario*/}
{/*import { useState } from 'react'*/}
import '../CampoTexto/CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`
   
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return (
        <div className='campo-texto'>
        
        <label>{ props.titulo }</label>
        <input 
        placeholder={placeholderModificado} 
        required ={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        />        
        
    </div>
    )
}
    {/*const [valor, actualizaValor] = useState("")
    console.log("Datos: ", props)
    const placeholderModificado = `${props.placeholder}...`
    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }


    return <div className='campo-texto'>
        
        <label>{ props.titulo }</label>
        <input 
        placeholder={placeholderModificado} 
        required ={props.required} 
        value={props.valor}
        onChange={manejarCambio}/>
        
        
    </div>
}*/}

export default CampoTexto
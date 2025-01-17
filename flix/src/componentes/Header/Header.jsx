import React, { useState } from "react"
import '../Header/Header.css'
import Formulario from '../Formulario/Formulario' 


const Header = () => {
    const [showForm, setShowForm] = useState(false)

    return ( 
    <header className="header">    
    <img src="/logo.ico" className="logo" alt="logo"/> 
    <div className="botones">
        <button className="home">Home</button>
       <button className="nuevo-video" onClick={() => setShowForm(!showForm)}>Nuevo video</button> 
        {showForm && (
            <Formulario />
        )} 
    </div>   
    </header> 
    )              
}

export default Header
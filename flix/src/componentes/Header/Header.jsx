import React, { useState } from "react"
import '../Header/Header.css'
import Formulario from '../Formulario/Formulario'


const Header = (props) => {
    const [showForm, setShowForm] = useState(false)

    const { agregarVideo } = props


    const toggleFormulario = (props) => {
        setShowForm(!showForm)
    }


    return (
        <header className="header">
            <img src="/logo.ico" className="logo" alt="logo" />
            <div className="botones">
                <button className="home">Home</button>
                <button className="nuevo-video" onClick={toggleFormulario}>Nuevo video</button>
                {showForm && (
                    <Formulario
                        cerrarFormulario={toggleFormulario}
                        agregarVideo={agregarVideo}
                    />
                )}
            </div>
        </header>
    )
}

export default Header
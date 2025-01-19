import React, { useState } from "react"
import "../Colaborador/Colaborador.css"
import Formulario from "../../Formulario/Formulario"

const Colaborador = () => {
    
    
    const [videos, setVideos] = useState([])
    
    const agregarVideo = (nuevoVideo) => {
        setVideos([...videos, nuevoVideo])
    }
    

    return <div className="colaborador">
        {/* Función para agregar videos */}
        <Formulario agregarVideo={agregarVideo} />

        {/* Sección para renderizar los videos*/}
        <div className="video">          
            {videos.map((videos, index) => ( 
                <div key={index} className="video-item">
        <iframe            
            width="450"
            height="315"
            src={`https://www.youtube.com/embed/${videos.url.split("v=")[1]}`}
            title={videos.titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"            
            allowFullScreen
        ></iframe>
        <p>{videos.titulo}</p>
        </div>
        ))}
       {/* <div className="info"> */}
            <button onClick={() => eliminarVideo(index)} className="eliminar-video">
                Eliminar
            </button>
       {/* </div> */}
    </div>
    </div>
}

export default Colaborador
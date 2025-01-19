import React, { useState, useEffect } from 'react'
import '../Card/Card.css'

const Card = () => {
    const [videos, setVideos] = useState([])

    //Obtener los datos del db.json
    useEffect(() => {
        //Realiza la petición HTTP para obtener los datos
        fetch('https://localhost:3000/videos')
            .then((response) => response.json())
            .then((data) => setVideos(data))
            .catch((error) => console.error('Error al obtener los videos:', error))
    }, [])


    return (
        <section className="videos-section">
            
            {videos.length > 0 ? (
                videos.map((video) => (
                    <div key={video.id} className="card">
                        <h3>{video.titulo}</h3>
                        <p>{video.descripcion}</p>
                        <img src={video.imagen} alt={video.titulo} />
                    </div>
                ))
            ) : (
                <p>Cargando videos...</p>
            )}
        </section>

    )
}

export default Card
import React, { useState, useEffect } from 'react'
import '../Card/Card.css'

const Card = () => {
    const [videos, setVideos] = useState([])

    //Obtener los datos del db.json
    useEffect(() => {
        //Realiza la petición HTTP para obtener los datos
        fetch('http://localhost:3001/videos')
            .then((response) => response.json())
            .then((data) => setVideos(data))
            .catch((error) => console.error('Error al obtener los videos:', error))
    }, [])


    return (
        <section className="videos-section">
            
            {videos.length > 0 ? (
                videos.map((videos) => (
                    <div key={videos.id} className="card">
                        <h3>{videos.titulo}</h3>
                        
                        <img src={videos.imagen} alt={videos.titulo} />
                    </div>
                ))
            ) : (
                <p>Cargando videos...</p>
            )}
        </section>

    )
}

export default Card 
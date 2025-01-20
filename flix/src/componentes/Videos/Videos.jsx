import React, { useState, useEffect } from 'react'
import '../Videos/Videos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import Card from '../Card/Card'

const getVideoId = (url) => {
    const regExp = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp)
    return match ? match[1] : ''
}

const Videos = (props) => {
    const [videos, setVideos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [videosPorCategoria, setVideosPorCategoria] = useState({})
    const { secciones } = props

    //Obtener los videos y las categorias
    useEffect(() => {
        const fetchData = async () => {
            try {
                const videosResponse = await fetch('http://localhost:3001/videos')
                const categoriasResponse = await fetch('http://localhost:3001/categorias')

                const videosData = await videosResponse.json()
                const categoriasData = await categoriasResponse.json()

                console.log(videosData)
                console.log(categoriasData)

                setVideos(videosData)
                setCategorias(categoriasData)

                //Agrupar videos por categoría
                const grupedVideos = categoriasData.reduce((acc, categoria) => {
                    acc[categoria.nombre] = videosData.filter(video => video.categoria === categoria.nombre)
                    console.log('Categoría: ${categoria.nombre} -  Videos: `, acc[categoria.nombre]')
                    return acc
                }, {})

                setVideosPorCategoria(grupedVideos)
            } catch (error) {
                console.error('Error al obtener los videos y categorías:', error)
            }
        }

        fetchData()
    }, [])
        console.log("Videos agrupados por categoría:", videosPorCategoria)

        //Eliminar video
        const manejarEliminar =async (id) => {
            try {
                await fetch(`http://localhost:3001/videos/${id}`, {
                    method: 'DELETE', 
                })

                //Actualizar estado
                const updatedVideos = videos.filter((video) => video.id !== id)
                setVideos(updatedVideos)

                //Reorganizar videos por categoría
                const updatedVideosPorCategoria = categorias.reduce((acc,categoria) => {
                    acc[categoria.nombre] = updatedVideos.filter(
                        (video) => video.categoria ===categoria.nombre
                    )
                    return acc
                }, {})

                setVideosPorCategoria(updatedVideosPorCategoria)
            }catch (error) {
                console.error('Error al eliminar video:', error)
            }
        }

    return (
        <div className='seccion-videos'>
            <h1>Videos</h1>
            {categorias.map(categoria => (
                <div key={categoria.id}>
                    <h2 style={{ backgroundColor: categoria.color }}>{categoria.nombre}</h2>
                    <div className='card'>
                        {videosPorCategoria[categoria.nombre] ? (
                            videosPorCategoria[categoria.nombre].map(video => (
                                <div key={video.id} className='iframe' style={{ backgroundColor: categoria.color, padding: '1rem' }}>
                                    <h3>{video.titulo}</h3>
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src={`https://www.youtube.com/embed/${getVideoId(video.url)}`}
                                        title={video.titulo}
                                        frameBorder="0"
                                        allow="accelerometer; 
                                        autoplay; 
                                        clipboard-write; 
                                        encrypted-media; 
                                        gyroscope; 
                                        picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <button
                                        className="delete-button"
                                        onClick={() => manejarEliminar(video.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} className='trash'/>
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No hay videos disponibles en esta categoría.</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Videos








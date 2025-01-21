import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import Header from './componentes/Header/Header'
import Banner from './componentes/Banner/Banner'
import Videos from './componentes/Videos/Videos'
import Footer from './componentes/Footer/Footer'

function App() {
  const [videos, setVideos] = useState([])
  const [videoAleatorio, setVideoAleatorio] = useState(null)

  //Obtener los videos desde la API
  const obtenerVideos = async () => {
    try {
      const respuesta = await fetch('http://localhost:3001/videos')
      const datos = await respuesta.json()
      setVideos(datos)
    } catch (error) {
      console.error('Error al obtener los videos', error)
    }
  }

  // Función para agregar video a db.json
  const agregarVideo = async (nuevoVideo) => {
    console.log('Iniciando agregarVideo:', nuevoVideo)
    try {
      const respuesta = await fetch('http://localhost:3001/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoVideo),
      })

      console.log('Respuesta del servidor recibida:', respuesta)

      if (respuesta.ok) {
        console.log('La respuesta del servidor está lista para convertir a JSON:', respuesta)

        const videoGuardado = await respuesta.json()
        console.log('Datos convertidos a JSON:', videoGuardado);

        //Obtener lista actualizada de videos
        obtenerVideos()
      } else {
        console.error('Error al guarar el video')
      }
    } catch (error) {
      console.error('Error en la peetición POST', error)
    }
  }

  //Obtener los videos
  useEffect(() => {
    obtenerVideos()
  }, [])

  //Obtener un video aleatorio para el banner
  useEffect(() => {
    if (videos.length > 0) {
      const videoAleatorio = videos[Math.floor(Math.random() * videos.length)]
      setVideoAleatorio(videoAleatorio)
    }
  }, [videos])


  const [seccionVideos, actualizarSeccionVideos] = useState([
    {
      id: uuid,
      titulo: "Front End",
      colorPrimario: "#4cc9f0",
      colorSecundario: "#48bfe3"
    },
    {
      id: uuid,
      titulo: "Back End",
      colorPrimario: "#72efdd",
      colorSecundario: "#80ffdb"
    },
    {
      id: uuid,
      titulo: "Innovación y Gestión",
      colorPrimario: "#00cfc1",
      colorSecundario: "#44e5e7"
    }
  ])

  return (
    <div>
      <Header agregarVideo={agregarVideo} />
      <Banner video={videoAleatorio} />
      <div>
        <Videos
          secciones={seccionVideos}
          videos={videos} />
      </div>
      <Footer />
    </div>

  )
}


export default App

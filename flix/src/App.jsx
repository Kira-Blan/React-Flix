import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import MiFlix from './componentes/MiFlix/MiFlix'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header/Header'
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario/Formulario'
import Videos from './componentes/Videos/Videos'
//import NuevoVideo from './componentes/NuevoVideo/NuevoVideo'
import Footer from './componentes/Footer/Footer';

function App() {
  const [mostarFormulario, actualizarMostrar] = useState(false)
  const [videos, actualizarVideos] = useState([
    {
    id: uuid(),
    titulo: "Consejos de CSS FlexBox para comenzar",
    url: "https://www.youtube.com/watch?v=EB4vWLzfVcI&t=2s",
    categoria: "Front End"
  },
  {
    id: uuid(),
    titulo: "Creando una base de datos MySQL para tu proyecto Java con Spring",
    url: "https://www.youtube.com/watch?v=59TU5iAd174",
    categoria: "Back End"
  },
  {
    id: uuid(),
    titulo: "Consejos de CSS FlexBox para comenzar",
    url: "https://www.youtube.com/watch?v=EB4vWLzfVcI&t=2s",
    categoria: "Innovación y gestión"
  }
])

const [video, actualizarSeccionVideos] = useState([
  {
    id: uuid(),
    titulo: "Front End",
    colorPrimario: "#4cc9f0",
    colorSecundario: "#48bfe3"
  },
  {
    id: uuid(),
    titulo: "Back End",
    colorPrimario: "#72efdd",
    colorSecundario: "#80ffdb"
  },
  {
    id: uuid(),
    titulo: "Innovación y Gestión",
    colorPrimario: "#00cfc1",
    colorSecundario: "#44e5e7"
  }
])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostarFormulario)
  }

  //Registrar video
  const registrarVideo = (videos) => {
    console.log("Nuevo video:", videos)
    //Spread operator
    actualizarVideos([...Videos, video])
  }

  // Eliminar video
  const eliminarVideo = (id) => {
    console.log("Eliminar video", id)
  } 

  return (
    <div>
      <Header />
      <Banner />
    {/*}  <MiFlix cambiarMostrar={cambiarMostrar} /> */}
    <div>
      <Videos 
      datos={videos}
      key={videos.titulo}
      videos={videos.filter(videos => videos.videos === videos.titulo)}
      eliminarVideo={eliminarVideo}
     />      
    </div>
    <Footer />
    </div>

  )
}


export default App

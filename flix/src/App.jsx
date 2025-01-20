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
   
])

const [seccionVideos, actualizarSeccionVideos] = useState([
  {
    id: 1,
    titulo: "Front End",
    colorPrimario: "#4cc9f0",
    colorSecundario: "#48bfe3"
  },
  {
    id: 2,
    titulo: "Back End",
    colorPrimario: "#72efdd",
    colorSecundario: "#80ffdb"
  },
  {
    id: 3,
    titulo: "Innovación y Gestión",
    colorPrimario: "#00cfc1",
    colorSecundario: "#44e5e7"
  }
])

 // const cambiarMostrar = () => {
  //  actualizarMostrar(!mostarFormulario)
 // }

  //Registrar video
 // const registrarVideo = (videos) => {
  //  console.log("Nuevo video:", videos)
    //Spread operator
  //  actualizarVideos([...Videos, video])
 // }

  // Eliminar video
 // const eliminarVideo = (id) => {
  // console.log("Eliminar video", id)
  //} 

  return (
    <div>
      <Header />
      <Banner />
    
    <div>
     
      <Videos secciones={seccionVideos}
     
     />      
    </div>
    <Footer />
    </div>

  )
}


export default App

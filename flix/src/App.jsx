import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header/Header'
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario/Formulario'
import Videos from './componentes/Videos/Videos'
//import NuevoVideo from './componentes/NuevoVideo/NuevoVideo'


{/*const videos = [

  {
    titulo: "Front End",
    colorPrimario: "#4cc9f0",
    colorSecundario: "#48bfe3"    
  },
  {
    titulo: "Back End",
    colorPrimario: "#72efdd",
    colorSecundario: "#80ffdb"
  },
  {
    titulo: "Innovación y Gestión",
    colorPrimario: "#00cfc1",
    colorSecundario: "#44e5e7"
  }
]*/}


function App() {
  const [mostarFormulario, actualizarFormulario] =useState(true)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostarFormulario)
  }

  return (      
          <div>
       <Header />       
      <div className='banner-container'>
      <Banner />      
    </div>
   {/*} <Formulario />
        {mostarFormulario && <Formulario />} 
    
    {/*<NuevoVideo />*/}
</div>
  );
}

export default App

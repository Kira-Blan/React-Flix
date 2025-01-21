import React from "react";
import '../Banner/Banner.css';



const Banner = ({ video }) => {
  const obtenerUrlDelVideo = (url) => {
    const videoId = url.split("v=")[1]; // Extraer el video ID de la URL
    return `https://www.youtube.com/embed/${videoId}`; // Crear la URL de YouTube para incrustar
  };

  return (
    <section className="banner-container">
      <img src="/banner.png" className="banner" alt="imagen de computadora" />
      {video && (
        <div className="banner-info">
          <iframe
            width="100%"
            height="400"
            src={obtenerUrlDelVideo('https://www.youtube.com/watch?v=WvVgmSiT1uU')}
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
        </div>
      )
      }
    </section >
  );
};


export default Banner
import '../Videos/Videos.css'
//import Colaborador from '../MiFlix/Colaborador/Colaborador'
import Card from '../Card/Card'

const Videos = (props) => {

    const{ secciones } = props

    
    return (
        <div>
            {secciones.map((seccion) => {
                const { colorPrimario, colorSecundario, titulo } = seccion
                const obj = { backgroundColor: colorSecundario }
                const estiloTitulo = { borderColor: colorPrimario }

                return (
                <section
                key={seccion.id}
                className = "seccion-videos"
                style={obj}
                > <h3 style={{ estiloTitulo }}>{titulo}</h3>
                <div className='card'>
                    <Card />
                </div>
                </section>
    )
})}
    </div> 
    ) 
}

export default Videos
        
           
       
    
    



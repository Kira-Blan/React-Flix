import '../Videos/Videos'
import Colaborador from '../MiFlix/Colaborador/Colaborador'

const Videos = (props) => {

    const { colorPrimario, colorSecundario, titulo} = props.datos 
    const obj = {backgroundColor: colorSecundario}
    const estiloTitulo = {borderColor: colorPrimario}

    return <section className='seccion-videos' style={obj}>
        <h3 style={{ estiloTitulo }}>{titulo}</h3>
        <div className='colaboradores'>
            <Colaborador />
        </div>
    </section>
}

export default Videos
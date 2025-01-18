import { useState } from "react";
import '../MiFlix/MiFlix.css'
import Formulario from "../Formulario/Formulario";

const MiFlix = (props) => {
    console.log("Props MiFlix", props)

    return <section className="miflix">
        <Formulario />
    </section>
}

export default MiFlix
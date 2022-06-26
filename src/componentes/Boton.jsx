import React from "react";

export default function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        <button className={esBotonDeClic ? 'boton-clic' : 'boton-recet'} onClick={manejarClic}>
            {texto}
        </button>
    )
}
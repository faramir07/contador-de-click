import React from "react";
import "../styles/Botton.css";

export default function Boton({ texto, esBotonDeClick, manejarClick }) {
    return (
        <button className={esBotonDeClick ? 'boton-clic' : 'boton-recet'} onClick={manejarClick}>
            {texto}
        </button>
    )
}
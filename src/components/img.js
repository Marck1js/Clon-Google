import React from "react"
import google from "./google.png"
import Estilos from "./img.module.css";
export default function Imgs () {
    return (
        <div className={Estilos.main}>            
            <img src={google}></img>  
        </div>
    )
}
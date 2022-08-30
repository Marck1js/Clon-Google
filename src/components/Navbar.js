import React from "react";
import Apps from '../svg/apps.png'
import Estilos from './Navbar.module.css'
export default function Navbar () {

    return (
        <div className={Estilos.main}>
            <div>
                
            </div>
            <header className={Estilos.container}>
                <div>
                    <a href="/">Gmail</a>
                </div>
                <div className={Estilos.img}>
                    <a href="/">Imágenes</a>
                </div>
                <div className={Estilos.ico}>
                    <div className={Estilos.ico_border}>
                        <img src={Apps} width={26} height={26}/>
                    </div>        
                </div>
                <div>
                    <button>Iniciar Sesion</button>
                </div>
            </header>
                
        
        </div>
    )

}
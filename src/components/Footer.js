import React from "react";
import Estilos from './Footer.module.css';
export default function Footer () {


    return (
        <div className={Estilos.main}>
            <div className={Estilos.span}><span>Argentina</span></div>
            <footer className={Estilos.footer}>
             

                <div className={Estilos.first}>
                    <a href="#">Sobre Google</a>
                    <a href="#">Publicidad</a>
                    <a href="#">Negocios</a>
                    <a href="#">Cómo funciona la Búsqueda</a>
                </div>
                <div className={Estilos.second}>
                    <a href="#">Privacidad</a>
                    <a href="#">Condiciones</a>
                    <a href="#">Preferencias</a>
                </div>
                

            </footer>
        </div>
    )
}
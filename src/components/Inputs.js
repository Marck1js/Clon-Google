import React, {useState} from 'react';

import Estilos from './Inputs.module.css';
import cancelinfo from '../svg/cancel.ico';
import searchinfo from '../svg/search.ico';
import microinfo from '../svg/micro.ico';
export default function Inputs () {

    const [name,setName] = useState('');

    const Change = (e) => {
        setName(e.target.value)
    }

    const DeleteText = () => {
        setName('')
    }
    
    return (
    <form>

        <div className={Estilos.main}>

            {/* FIRST */}
         <div className={Estilos.first}>
                <div className={Estilos.search}><img src={searchinfo} width={15} height={15}/></div>
         </div>
            {/* SECOND */}
         <div className={Estilos.middle}>
            <div><input type={'text'} value={name} onChange={(e)=> Change(e)}/></div>
         </div>
            {/* THIRD */}
            {
              name !== '' ?  <div className={Estilos.cancelacion} onClick={()=> DeleteText()}><img src={cancelinfo} width={15} height={15}/></div>
                : null
            }
        
        
         <div className={Estilos.last}>
                <div className={Estilos.micro}><img src={microinfo} width={15} height={25}/></div>
         </div>
            
        </div>
        <div>
            <div className={Estilos.btn}>
            <button>Buscar con Google</button>
            <button>Voy a tener suerte</button>
            </div>
            <span className={Estilos.offer}>Ofrecido por Google en: <a href='#'>Español (Latinoamérica)</a></span>
        </div>
    </form>
    )
}
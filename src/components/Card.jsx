import { useState } from "react";
import imgArrow from '../imgs/arrowDown.png'
const Card = (props) =>{
    const [isOpen, setIsOpen] = useState(false);
    let genero
    if (props.gender === 'male') {
        genero = 'Masculino'
    }
    else{
        genero = 'Femenino'
    }
    return(
        <div style={{border:'2px solid #00000040', borderRadius:'1rem', width:'20rem'}}>
            <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'#00000040', borderRadius:'0.9rem'}}>
                <p>{props.title}</p>
                <img src={imgArrow} alt="arrow_down" onClick={() => setIsOpen(!isOpen)} style={{marginTop:'0.5rem',width:'30px', height:'30px'}}/>
            </div>
            {isOpen && (<div>
                    <p>Nombre Completo: {props.fullname}</p>
                    <p>Genero: {genero}</p>
                    <p>Ubicación: {props.city   }, {props.country}</p>
                    <p>Email: {props.email}</p>
                    <p>Teléfono: {props.phone}</p>
                </div>)
            }
            
        </div>
    )
}
export default Card;
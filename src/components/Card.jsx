import { useState } from "react";
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
        <div style={{border:'2px solid black', borderRadius:'1rem', width:'20rem'}}>
            <div style={{backgroundColor:'#40e0d090', borderRadius:'0.9rem', height:'27rem'}}>
                <img src={props.img} alt="arrow_down" onClick={() => setIsOpen(!isOpen)} style={{width:'100%', borderRadius:'0.9rem 0.9rem 0 0'}}/>
                <p style={{fontSize:'20px'}} >{props.fullname}</p>
                <p>{props.city}, {props.country}</p>
            </div>
            
            {isOpen && (<div>
                    <p>Nombre Completo: {props.fullname}</p>
                    <p>Genero: {genero}</p>
                    <p>Email: {props.email}</p>
                    <p>Teléfono: {props.phone}</p>
                </div>)
            }
            
        </div>
    )
}
export default Card;
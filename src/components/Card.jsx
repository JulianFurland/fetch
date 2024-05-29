import { useState } from "react";
const Card = (props) =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <div style={{display:'flex'}}>
                <p>{props.title}</p>
                <img src={props.img} alt="arrow_down" onClick={setIsOpen((isOpen)=> !isOpen)}/>
            </div>
            {
                isOpen && <div>
                    <p>A</p>
                </div> 
            }
            
        </div>
    )
}
export default Card;
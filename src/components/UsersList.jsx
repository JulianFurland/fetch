import { useEffect, useState } from "react"
import Card from "./Card"
 
const UsersList = () => {
const urlApi = "https://randomuser.me/api/?results=40"
const [users, setUsers] = useState([])
useEffect(() => {
    fetch(urlApi)
    .then(response => response.json())
    .then(data => setUsers(data.results))
    .catch(error => console.log('Hubo un error ' + error))
}, [])
return(
<div>
    <h1>Listado: </h1>
    <ul style={{listStyle:'none', width:'100%', height:'60rem', display:'flex', flexDirection:'column', justifyContent:'space-between', flexWrap:'wrap'}}> {users.map((user, index) => 
    <li key={index} style={{marginTop:'1rem'}}>
        <Card title={user.name.first}
            fullname={`${user.name.last}, ${user.name.first}`} 
            gender={user.gender} city={user.location.city} 
            country={user.location.country} 
            email={user.email} 
            phone={user.cell}/>
    </li>
    )}</ul>
</div>
)}
export default UsersList
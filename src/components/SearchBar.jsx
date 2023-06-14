import { useState } from "react";
import '../components/SearchBar.css'

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("")
   const handleChange = (event) => {
      setId(event.target.value)
      console.log(event)
      //setId((idOld)=>idOld+1)
   }
   const add = ()=>{
      onSearch(id)
      setId("")
   };
   const randomChar=()=>{
      const randomNum = Math.floor(Math.random() * 825) + 1;
      onSearch(randomNum)
   }
   return (
      <div className='search'>
         <label >Escribí un número: </label>
         <input type='search' onChange={handleChange} value={id} name="id" placeholder="N°"/>
         <button className='boton1' onClick={add}>Agregar</button>
         <button className='boton2' onClick={randomChar}>Agregar personaje aleatorio</button>
      </div>
   );
}

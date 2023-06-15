import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function Detail() {
  const { id } = useParams()
  const [character, setCharacter] = useState({})
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {

       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);




  return (
    <div className="Detail">
      <div className= "text">
        <h1>Detail</h1>
    <h1>id: {id}</h1>
    <h1>{character.name}</h1>
    <h2>{character.status}</h2>
    <p>{character.species}</p>
    <p>{character.gender}</p>
    <p>{character.origin?.name}</p>
      </div>
    <div className="image">
      <img src={character.image} alt={character.name} />
    </div>
    
 </div> 
 )
}



import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import './Detail.css'

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
        <hr />
    <h1>id: {id}</h1>
    <hr />
    <h1>{character.name}</h1>
    <hr />
    <h2>{character.status}</h2>
    <hr></hr>
    <p>{character.species}</p>
    <hr></hr>
    <p>{character.gender}</p>
    <hr />
    <p>{character.origin?.name}</p>
      </div>
    <div className="image">
      <img src={character.image} alt={character.name} />
    </div>
    
 </div> 
 )
}



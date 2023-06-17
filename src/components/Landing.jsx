import React from 'react'
import "../components/Landing.css"
import { Link } from 'react-router-dom'





export default function Landing() {
 
  return (
    <div className="landing">
  
        <h1>Bienvenidos a Rick y Morty</h1>
        <Link to="/home">
    
          <button>Empezar</button>
          </Link>
          
        </div>
  )
}

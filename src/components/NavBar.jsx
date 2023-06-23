import React from 'react'
import './NavBar.css'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default function NavBar({onSearch}) {


  return (
    <div className ='Nav'>
      <Link to={"/"}>
        <div>Cerrar sesión</div>
      </Link>
  <Link to={"/about"}><div>Creador</div></Link>

  <Link to={"/home"}><div>Inicio</div></Link>
  <Link className="favButton" to={"/favorites"}>
        <div>Favorites</div>
      </Link>

  <SearchBar onSearch={onSearch}/>
  </div>
  )
}

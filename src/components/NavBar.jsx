import React from 'react'
import './NavBar.css'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default function NavBar({onSearch}) {
  return (
    <div className ='Nav'>
      <ul className="lista">
<li>
  <Link to="/about"><button>Creador</button></Link>
</li>
<li>
  <Link to="/home"><button>Inicio</button></Link>
</li>
</ul>
  <SearchBar onSearch={onSearch}/>
  </div>
  )
}

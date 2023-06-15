import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import  Landing  from "./components/Landing.jsx"





function App() {
   const [characters, setCharacters] = useState([])
   const [title, setTitle] = useState("Rick and Morty characters")
   const settingTitle = (str) => {
      setTitle(str)
   }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            const char = characters.find((ch) => Number(ch.id) === Number(id))
            if (char) return alert("ese personaje ya existe")
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id) {
      
      const newCharacters = characters.filter((ch) => ch.id !== Number(id))
      setCharacters(newCharacters)
   

   }
   return (
      <div className='App'>
         <NavBar onSearch={onSearch} />
         <Routes>
       <Route path="/" element={<Landing/>}> </Route>
         </Routes>
         <Cards characters={characters} onClose={onClose} settingTitle={settingTitle} />
      </div>
   );
}


export default App;

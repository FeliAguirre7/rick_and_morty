import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import axios from 'axios'
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from "./components/Landing.jsx"
import About from "./components/About"
import Detail from "../src/components/Detail"
import ErrorNotFound from "./components/ErrorNotFound"
import Favorites from './components/Favorites';








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


   const location = useLocation()
   const pathname = useLocation()

   return (
      <div className='App'>
         {console.log("--------mira-aqui---->", pathname)}

         {location.pathname !== "/" && <NavBar onSearch={onSearch} />}



         <Routes>

            <Route path="/" element={<Landing />}> </Route>

            <Route path="/about" element={<About />}> </Route>
            <Route
               path="/home"
               element={
                  <Cards
                     characters={characters}
                     onClose={onClose}
                     settingTitle={settingTitle}
                  />
               }
            ></Route>

            <Route path="/detail/:id" element={<Detail />}> </Route>
            <Route path="*" element={<ErrorNotFound />}></Route>
            <Route
               path="/favorites"
               element={<Favorites onClose={onClose} />}
            ></Route>
         </Routes>
         {
            pathname !== "/" &&
               pathname !== "/home" &&
               pathname !== "/about" &&
               pathname !== "/detail/:id" ? (
               <ErrorNotFound />
            ) : null
         }

      </div>
   );
}


export default App;

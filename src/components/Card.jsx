import { useEffect, useState } from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import Detail from './Detail';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';


function Card({ id, name, status, species, gender, origin, image, onClose, myFavorites, removeFav, addFav }) {
   const [isFav, setIsFav]= useState(false)

const handleFavorite=function(){
   if(isFav){
      setIsFav(false)

   } else {
      setIsFav(true)

   }
}





   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);






      

   return (
    
<div className="card">
   <div>
              {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}

         <button className="cerrarBoton" onClick={() => onClose(id)}>X</button>
         <Link to={`/Detail/${id}`}>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
            <img src={image} alt={name} />
         </Link>
      </div>
      </div>
   )
}




function mapState(state) {
   return {
      myFavorites: state.myFavorites,
   }

}


function mapDispatch(dispatch) {
   return {
      addFav: function (char) {
         dispatch(addFav(char))
      },
      removeFav: function (id) {
         dispatch(removeFav(id))
      }
   }
}





export default connect(mapState, mapDispatch)(Card)
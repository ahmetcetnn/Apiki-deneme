import React from 'react'
import '@splidejs/react-splide/css';



const API_IMG = "https://image.tmdb.org/t/p/w500/"
const MovieBox= ({ title, poster_path, vote_average,release_date, overview})=> {






  
  return (
    <div className="">

        <div >
        <img src={API_IMG+poster_path} alt="resim"></img>
        <div >
            <button type='button' >View More</button>
        </div>
        </div>
       
        
        
        
    </div>
  )
}

export default MovieBox

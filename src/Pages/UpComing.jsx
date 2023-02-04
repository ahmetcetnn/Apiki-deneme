import { useState,useEffect } from "react"
import '../App.css';

import React from "react";
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components'


// "https://api.themoviedb.org/3/movie/popular?api_key=002f45e7d56066b7503bddca0e16ee67"
function UpComing({title, poster_path, vote_average,release_date, overview}) {
  const [movies,setMovies] =useState([])
  const API_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=002f45e7d56066b7503bddca0e16ee67"
  const API_IMG = "https://image.tmdb.org/t/p/w500/"
  
  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then (data => {
      console.log(data)
      setMovies(data.results)
    })
  },[])
  



  return <div>


  <Wrapper>
  <h1>Upcoming Movies</h1>
  
      <Splide options={{
        perPage:3,
        arrows:false,
        pagination:false,
        drag:'free',
        gap:'5rem',
      }}>
      {movies.map((movie) => {
        return(
          <SplideSlide key={movie.id}>
            <div className="resim">
        <img src={API_IMG+poster_path} alt="poster"/>
        </div>
              <Card>
        <h1>{title}</h1>
        
        
        
        </Card>
        
        </SplideSlide>
        )
      })}
     
      </Splide>
      </Wrapper>
      </div>
  }
  const Wrapper =styled.div`
  margin:3px 16px;
  padding:6rem
  max-height:25rem`;
  
  const Card =styled.div`
  min-height:15rem;
  border-radius:2rem;
  overflow:hidden;
  position:relative
  padding: 0%;;
    `
  
export default UpComing;

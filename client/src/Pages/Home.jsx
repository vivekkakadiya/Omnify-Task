import React, { useState } from 'react'
import { Navbar } from '../Component/Navbar'
import { MovieCard } from '../Component/MovieCard'
import { useEffect } from 'react';

export const Home = () => {
  const [data,setData]=useState([]);
  
  const url="https://api.themoviedb.org/3/discover/movie?api_key=5d95cfc9c212ea0443be6e1a4cde86bc";
  const getMovies=async()=>{
    const response=await fetch(url);
    const res=await response.json();
    setData(res.results);
  }

  useEffect(()=>{
    getMovies();
  },[]);

  return (
    <>
        <Navbar />
        <main className="container">
  <section className="movies" id="movies">
    <div className="row">
    
      {data.map((item)=>{
        return(
          <MovieCard  key={item.id}  name={item.original_title} img={item.poster_path} des={item.overview}/>
        )
      })
      } 
        

        </div>
  </section>
</main>
    </>
  )
}

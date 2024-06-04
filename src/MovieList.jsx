import React from 'react'

export default function MovieList({movies}) {
  return (
    <div className="movie-list">
        {movies.map((movie)=>(
        <div className="movie-card" >
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
        </div>
        ))}
    </div>
  )
}

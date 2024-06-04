import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import MovieList from "./MovieList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovie] = useState([]);
  const searchMovies = async (searchTerm) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=21c6b18dce764f6c5a15da91d461d3f2`
    );
    setMovie(response.data.results);
  };
  useEffect(() => {
    if (searchTerm) {
      searchMovies(searchTerm);
    }
  }, [searchTerm]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Search App</h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
      <div className="movie-container">
        {movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
// import { ReactDOM } from 'react-dom';
import { useState,useEffect } from 'react';
import SearchIcon from './search.svg';
import  MovieCard  from './MovieCard';

//api key: b10ddd7c

const API_URL = 'http://www.omdbapi.com?apikey=b10ddd7c'

// const PersonComponent = (props) => {
//   return (
//     <>
//       <h2>Name: {props.name}</h2>
//       <h2>LastName: {props.lastname}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   )
// }
// const movie1 = {
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
// }

const App = () => {
  // const[counter, setCounter] = useState(0);
  const[movies, setMovies] = useState([]);
  const[searchTerm,setSearchTerm] = useState('');

  const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  }

  useEffect(()=>{
    searchMovies('Spiderman');
  },[])

  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon}
          alt='search'
          onChange={()=> searchMovies(searchTerm)}
        />
      </div>
      {
        movies.length > 0
          ? (
            <div className='container'>
              {movies.map((movie)=>(
                <MovieCard movie={movie}/>
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
      }
      {/* <div className='container'>
        <div className='movie'>
            <div>
              <p>{movie1.Year}</p>
            </div>
            <div>
              <img 
                  src={movie1.Poster !== 'N/A'? movie1.Poster : 'http://via.placeholder.com/400'}
                  alt={movie1.Title}
              />
            </div>
            <div>
              <span>
                {movie1.Type}
              </span>
              <h3>{movie1.Title}</h3>
            </div>
        </div>
      </div>

      <div className='container'>
        <MovieCard movie1={movie1}/>
      </div> */}
      {/* <button onClick={()=> setCounter((prevCount)=> prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter((prevCount)=> prevCount+1)}>+</button>

      <PersonComponent
        name="Mery" 
        lastname={'Ana'} 
        age={30} 
      ></PersonComponent>
      <PersonComponent 
        name="john" 
        lastname={'Doe'} 
        age={30} 
      /> */}
    </div>
  );
}

export default App;

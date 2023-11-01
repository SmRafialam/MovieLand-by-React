import './App.css';
import React from 'react';
// import { ReactDOM } from 'react-dom';
import { useEffect } from 'react';
import SearchIcon from './search.svg';

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

const App = () => {
  // const[counter, setCounter] = useState(0);
  const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

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
          value="Superman"
          onChange={()=>{}}
        />
        <img 
          src={SearchIcon}
          alt='search'
        />
      </div>
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

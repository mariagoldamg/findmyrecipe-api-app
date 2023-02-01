import { useEffect, useState } from 'react';
import video from './food.mp4';
import './App.css';
import MyRecipiesComponent from './MyRecipiesComponent';

function App() {

const MY_ID = "d11a6160";
const MY_KEY = "4b8c05d97ebd1691cb71d27eb21ebb60"

const [mySearch, setMySearch] = useState (''); 
const [myRecipies, setMyRecipies] = useState ([]);
const [wordSubmit,setWordSubmit] = useState('avocado');

useEffect (()=>{
  async function fetchData() {
  const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  console.log(data.hits);

  setMyRecipies(data.hits);
}
fetchData();
}, [wordSubmit])

const myRecipeSearch =(e)=> {

  setMySearch (e.target.value)
}

const finalSearch =(e)=>{
  e.preventDefault();
  setWordSubmit(mySearch)
}

  return (
    <div  className="App">
  <div className="container">
  <video autoPlay muted loop>
   <source src={video} type="video/mp4" />
</video>
  <h1>Find a Recipe</h1>
  </div>
<div className='container'>
  <form onSubmit = {finalSearch}>
    <input className='search' placeholder='Search...' onChange = {myRecipeSearch} value = {mySearch}>
    </input>
  </form>
</div>
<div className='container'>
  <button> 
    <img className='icons' src='https://img.icons8.com/fluency/48/000000/fry.png' width='35px' alt='icon' />
  </button>
</div>

<div className='container'>
{myRecipies.map (element=>(
  <MyRecipiesComponent 
  label = {element.recipe.label} 
  image = {element.recipe.image} 
  calories = {element.recipe.calories} 
  ingredientLines = {element.recipe.ingredientLines}/>
))}
</div>
  </div>


  );
}


export default App;

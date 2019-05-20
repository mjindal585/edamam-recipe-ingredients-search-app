import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = '332c41c2';
  const APP_KEY ='68cb81ea7b6ec103b792541716105202';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery] = useState('home');

  useEffect(() =>{

    console.log("Effect Running");
    getRecipes();

  } , [query]
  );
  
  const examplereq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;


  const getRecipes = async () => {
    const response = await fetch(examplereq);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
 
 
  return (
    <div className="App">
     <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch} />
      <button className="search-button" type="submit">search</button>
     </form><div className="hosted"><p><h2>Site Hosted By Mohit Jindal</h2></p></div>
     <div className="recipes">
     {recipes.map(recipe =>(
        <Recipe title={recipe.recipe.label}
                calories={recipe.recipe.calories} 
                totalWeight	={recipe.recipe.totalWeight}
                servings={recipe.recipe.yield}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                url={recipe.recipe.url}
                 />
     ))}
    </div><p><h2>Site Hosted By Mohit Jindal</h2></p>
    </div>
  );
};

export default App;

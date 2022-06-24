import React, {useState , useEffect} from 'react';

import axios from 'axios';

const Animals = () => {
  // Create a variable to hold application state
  const [animals, setAnimals] = useState([]);
  useEffect(() =>{
     const animalFunction = async()=>{
      const response = await axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/10");
      const data = response.data;
        setAnimals(data);
        console.log(data);

    }; animalFunction()

  },[]);

  const animalList = animals.map((element)=> {
    return (

     <div class="ui card" key={element.id}>
      <div class="image">
        <img src={element.image_link} alt='animals'></img>
      </div>
      <div class="content">
        <h1 class="header">{element.name}</h1>
        <div class="meta">
          <span class="date">{element.habitat}</span>
        </div>
        <div class="description">
         <p>Diet: {element.diet}</p> 
         <p>Weight: {element.weight_min}-{element.weight_max}</p> 
         <p>Lifespan: {element.lifespan} years </p>
          
        </div>
      </div>
     
    </div>
    );
  }); 
   
  // Create effect
  return (
    <div>
      <h1> Animals</h1>
      {animalList}
    </div>
  );
};

export default Animals;

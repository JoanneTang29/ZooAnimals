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
        <img>{element.image_link}</img>
      </div>
      <div class="content">
        <a class="header">Kristy</a>
        <div class="meta">
          <span class="date">Joined in 2013</span>
        </div>
        <div class="description">
          Kristy is an art director living in New York.
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="user icon"></i>
          22 Friends
        </a>
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

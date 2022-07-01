import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Character = (props) => {
  const [homeWorld, setHomeWorld] = useState('');
  const [species, setSpecies] = useState('Human');
  const [mass, setMass] = useState('NA');


  const peopleSpecies = async () => {
    if(props.species.length < 1) {
      return species;
    } else {
      const { data } = await axios.get(props.species);
      setSpecies(data.name);
    }
    if(props.mass > 1) {
       setMass(props.mass);
    }
  }

  const fetchWorld = async () => {
    const { data } = await axios.get(props.homeWorld);
    setHomeWorld(data.name);
  
  };

     
  useEffect(() => {
    fetchWorld();
     peopleSpecies();
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  return (
    <div>
        <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>Birth Year</th>
        <th>Height</th>
        <th>Mass</th>
        <th>Homeworld</th>
        <th>Species</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th>{props.name}</th>
        <th>{props.birthYear}</th>
        <th>{props.height}</th>
        <th>{mass}</th>
         <th>{homeWorld}</th>
        <th>{species}</th>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Character
import React, {useState} from 'react';
import axios from 'axios';

export default function Areas({displayMeals}) {
  const [areas, setAreas] = useState([]);

  // On app load get all areas
  axios.get('/api/areas')
    .then(({data}) => setAreas(data))
    .catch(err => console.log('Error client retrieveing areas', err))

  const clickedArea = (e) => {
    axios.get(`api/recipes?area=${e.target.innerText}`)
      .then(({data}) => displayMeals(data))
  }

  const allAreas = areas.map((area, i) => { return area.strArea !== 'Unknown' ? <li onClick={clickedArea} key={i}>{area.strArea}</li> : ''})

  return(<ul>{allAreas}</ul>)
}
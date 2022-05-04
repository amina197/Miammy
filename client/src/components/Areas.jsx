import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Areas({displayMeals}) {
  const [areas, setAreas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // On app load get all areas
    axios.get('/api/areas')
      .then(({data}) => setAreas(data))
      .catch(err => console.log('Error client retrieveing areas', err));
  }, [])

  const clickedArea = (e) => {
    axios.get(`api/meals?area=${e.target.innerText}`)
      .then(({data}) => navigate('/meals', {state: {meals: data}}))
      .catch(err => console.log('Error client retrieveing meals by areas', err));
  };

  const allAreas = areas.map((area, i) => { return area.strArea !== 'Unknown' ?
    <li onClick={clickedArea} key={i}>{area.strArea}</li>
    : ''
  })

  return(<ul>{allAreas}</ul>)
}
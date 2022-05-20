import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SAreasContainer from '../styled/S-Areas';

export default function Areas() {
  const [areas, setAreas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // On app load get all areas
    axios.get('/api/areas')
      .then(({ data }) => setAreas(data))
      .catch((err) => console.error('Error client retrieveing areas', err));
  }, []);

  const clickedArea = (e) => {
    axios.get(`api/meals?area=${e.target.innerText}`)
      .then(({ data }) => navigate('/meals', { state: { meals: data } }))
      .catch((err) => console.error('Error client retrieveing meals by areas', err));
  };

  const allAreas = areas.map((area) => (area.strArea !== 'Unknown' ? (
    <li
      onClick={clickedArea}
      key={Math.random() * 1000}>
      {area.strArea}
    </li>
  )
    : null
  ));

  return (
    <SAreasContainer>
      <ul>{allAreas}</ul>
    </SAreasContainer>
  );
}

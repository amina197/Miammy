import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SFiltersWrapper } from '../styled/S-Home';

export default function Areas() {
  const [areas, setAreas] = useState([]);
  const [areaSelection, setAreaSelection] = useState('American');
  const navigate = useNavigate();

  useEffect(() => {
    // On app load get all areas
    axios.get('/api/areas')
      .then(({ data }) => setAreas(data))
      .catch((err) => console.error('Error client retrieveing areas', err));
  }, []);

  const areaSelected = () => {
    axios.get(`api/meals?area=${areaSelection}`)
      .then(({ data }) => navigate('/meals', { state: { meals: data } }))
      .catch((err) => console.error('Error client retrieveing meals by areas', err));
  };

  const allAreas = areas.map((area) => (area.strArea !== 'Unknown' ? (
    <option key={Math.random() * 1000} value={area.strArea}>
      {area.strArea}
    </option>
  )
    : null
  ));

  return (
    <SFiltersWrapper>
      <select name="area" id="area" value={areaSelection} onChange={(e) => setAreaSelection(e.target.value)}>
        { allAreas }
      </select>
      <button type="button" onClick={areaSelected}>Select</button>
    </SFiltersWrapper>
  );
}

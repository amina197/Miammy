import React, {useState} from 'react';
import axios from 'axios';

export default function App(props) {

  const [areas, setAreas] = useState([]);

  // On app load get all areas
  axios.get('/api/areas')
    .then(({data}) => setAreas(data))
    .catch(err => console.log('Error client retrieveing areas', err))

  const allAreas = areas.map((area, i) => { return area.strArea !== 'Unknown' ? <li key={i}>{area.strArea}</li> : ''})

  return (<ul>{allAreas}</ul>)
}
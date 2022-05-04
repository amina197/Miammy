import React, {useState} from 'react';
import axios from 'axios';

export default function Categories({displayMeals}) {
  const [categories, setCategories] = useState([]);

  // On app load get all areas
  axios.get('/api/categories')
    .then(({data}) => setCategories(data))
    .catch(err => console.log('Error client retrieveing categories', err));

  const clickedCategory = (e) => {
    axios.get(`api/meals?category=${e.target.innerText}`)
      .then(({data}) => displayMeals(data))
      .catch(err => console.log('Error client retrieveing meals by categories', err));
  };

  const allCategories = categories.map((category, i) => { return category.strCategory !== 'Unknown' ? <li onClick={clickedArea} key={i}>{category.strCategory}</li> : ''})

  return(<ul>{allCategories}</ul>)
}
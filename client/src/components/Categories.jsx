import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Categories({displayMeals}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // On app load get all categories
    axios.get('/api/categories')
      .then(({data}) => setCategories(data))
      .catch(err => console.log('Error client retrieveing categories', err));
  }, [])

  const clickedCategory = (e) => {
    axios.get(`api/meals?category=${e.target.innerText}`)
      .then(({data}) => displayMeals(data))
      .catch(err => console.log('Error client retrieveing meals by categories', err));
  };

  const allCategories = categories.map((category, i) => { return category.strCategory !== 'Unknown' ? <li onClick={clickedCategory} key={i}>{category.strCategory}</li> : ''})

  return(<ul>{allCategories}</ul>)
}
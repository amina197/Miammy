import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import {SCategoriesContainer} from './../styled/S-Categories.js';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // On app load get all categories
    axios.get('/api/categories')
      .then(({data}) => setCategories(data))
      .catch(err => console.log('Error client retrieveing categories', err));
  }, [])

  const clickedCategory = (e) => {
    axios.get(`api/meals?category=${e.target.innerText}`)
      .then(({data}) => {
        navigate('/meals', {state:{ meals: data }})
      })
      .catch(err => console.log('Error client retrieveing meals by categories', err));
  };

  const allCategories = categories.map((category, i) => { return category.strCategory !== 'Unknown' ?
        <li onClick={clickedCategory} key={i}>{category.strCategory}</li>
      : ''
    }
  )

  return(<SCategoriesContainer>
    <ul>{allCategories}</ul>
  </SCategoriesContainer>
  )
}
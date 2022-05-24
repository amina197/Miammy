import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SFiltersWrapper } from '../styled/S-Home';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [categorySelection, setCategorySelection] = useState('Beef');
  const navigate = useNavigate();

  useEffect(() => {
    // On app load get all categories
    axios.get('/api/categories')
      .then(({ data }) => setCategories(data))
      .catch((err) => console.error('Error client retrieveing categories', err));
  }, []);

  const categorySelected = () => {
    axios.get(`api/meals?category=${categorySelection}`)
      .then(({ data }) => {
        navigate('/meals', { state: { meals: data, filter: categorySelection } });
      })
      .catch((err) => console.error('Error client retrieveing meals by categories', err));
  };

  const allCategories = categories.map((category) => (category.strCategory !== 'Unknown' ? (
    <option key={Math.random() * 1000} value={category.strCategory}>
      {category.strCategory}
    </option>
  )
    : null
  ));

  return (
    <SFiltersWrapper>
      <select name="category" value={categorySelection} onChange={(e) => setCategorySelection(e.target.value)}>
        {allCategories}
      </select>
      <button type="button" onClick={categorySelected}>Select</button>
    </SFiltersWrapper>
  );
}

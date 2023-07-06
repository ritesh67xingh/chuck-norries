import React, { useEffect, useState } from 'react';
import './App.css';

import Category from './components/Category';
import Joke from './components/Joke';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedJoke, setSelectedJoke] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchJoke = async (category) => {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
      const data = await response.json();
      setSelectedJoke(data.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Chuck Norries Jokes</h1>
      {categories.map((category, index) => (
        <Category key={index} category={category} fetchJoke={fetchJoke} />
      ))}
      {selectedJoke && <Joke joke={selectedJoke} />}
    </div>
  );
};

export default App;

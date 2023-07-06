import React from 'react';

const Category = ({ category, fetchJoke }) => {
  const handleClick = () => {
    fetchJoke(category);
  };

  return (
    <div>
      <h2>{category}</h2>
      <button onClick={handleClick}>Get Joke</button>
    </div>
  );
};

export default Category;

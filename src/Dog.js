import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import './Dog.css';

const Dog = ({ dogsDataArray }) => {
  const { src } = useParams();
  const dogData = dogsDataArray.filter(dog => (
    dog.src === src
  ))[0]
  if (dogData) {
    return (
      <div className="Dog">
        <h1>{dogData.name}</h1>
        <img 
          src={`/dog-images/${src}.jpg`}
          alt={dogData.name}
        />
        <h3>age: {dogData.age}</h3>
        <h4>facts:</h4>
        <ul>
          {dogData.facts.map(fact => (
            <li>{fact}</li>
          ))}
          </ul>
      </div>
    );
  } else {
    return (
      <Navigate to="/dogs" />
    )
  };
};

export default Dog;

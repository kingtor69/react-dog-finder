import React from 'react';
import { useParams } from 'react-router-dom';

import './Dog.css';

const Dog = ({ dogsDataArray }) => {
  const { src } = useParams();
  const dogData = dogsDataArray.reduce(dog => (
    dog.src === src
  ), [])[0]
  return (
    <div className="Dog">
      <h1>{dogData.name}</h1>
      <img src={`../dog-images/${src}`} />
      <ul>
        <li>age: {dogData.age}</li>
        <li>facts:</li>
        <ul>
          {dogData.facts.map(fact => (
            <li>{fact}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Dog;

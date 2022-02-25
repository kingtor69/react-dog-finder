import React from 'react';

import './DogList.css';

const DogList = ({ dogsListData }) => (
  <div className="DogList">
    <h1>We Got Dogs!</h1>
    <ul>
      {dogsListData.map(dog => (
        <li key={dog.src}><a href={`./dogs/${dog.src}`}>
          {dog.name}
        </a></li>
      ))}
    </ul>
    <p>click on a dog's name for a picture and facts</p>
  </div>
);

export default DogList;

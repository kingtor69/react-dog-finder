import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DogList from './DogList';
import Dog from './Dog';

const AppRoutes = ({ dogsData }) => {
  return (
    <Routes>
      <Route 
        path="/dogs" 
        element={<DogList dogsListData={
          dogsData.dogs.map (dog => (
            { 
              name: dog.name,
              src: dog.src
            }
          ))
        } 
      />} />
      <Route 
        path="/dogs/:name"
        element={<Dog dogsDataArray={dogsData.dogs} />}
      />
    </Routes>
  );
};

export default AppRoutes;

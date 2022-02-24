import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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
        } />} 
      />
      <Route 
        path="/dogs/:name"
        element={<Dog dogsDataArray={dogsData.dogs} />}
      />
      <Route
        path="*"
        element={<Navigate to="/dogs" />}
      />   
    </Routes>
  );
};

export default AppRoutes;

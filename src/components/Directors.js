import React from 'react';
import { directors } from '../data';

import Director from './Director'

const Directors = () => {

  const directorDivs = () => {
    return directors.map(directorData => <div><Director directorData={directorData} /></div>)
  }

  return (
    <div>
      <h1>Directors Page</h1>
        {directorDivs()}
    </div>
  );
};

export default Directors;

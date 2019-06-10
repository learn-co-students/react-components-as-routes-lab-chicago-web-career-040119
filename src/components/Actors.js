import React from 'react';
import { actors } from '../data';
import Actor from './Actor'

const Actors = () => {

  const actorDivs = () => {
    return actors.map(actorData => <div><Actor actorData={actorData} /></div>)
  }

  return (
    <div>
      <h1>Actors Page</h1>
        {actorDivs()}
    </div>
  );
};

export default Actors;

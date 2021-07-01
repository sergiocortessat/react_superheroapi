import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from '@material-ui/core';

function SuperHero({ data }) {
  console.log(data);
  return (
    <>
      <p>
        Combat
      </p>
      <LinearProgress variant="determinate" value={data.powerstats.combat} className="mb-3" />
      <p>
        Durability
      </p>
      <LinearProgress variant="determinate" value={data.powerstats.durability} className="mb-3" />
      <p>
        Intelligence
      </p>
      <LinearProgress variant="determinate" value={data.powerstats.intelligence} className="mb-3" />
      <p>
        Power
      </p>
      <LinearProgress variant="determinate" value={data.powerstats.power} className="mb-3" />
      <p>
        Speed
      </p>
      <LinearProgress variant="determinate" value={data.powerstats.speed} className="mb-3" />
      <p>
        Strength
      </p>
      <LinearProgress variant="determinate" value={data.powerstats.strength} className="mb-3" />
    </>
  );
}

SuperHero.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SuperHero;

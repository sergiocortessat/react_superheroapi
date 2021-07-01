import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from '@material-ui/core';

function SuperHero({ data }) {
  console.log(data.powerstats);
  return (
    <>
      <p>
        Combat
        <span>
          <LinearProgress variant="determinate" value={data.powerstats.combat} />
        </span>
      </p>
    </>
  );
}

SuperHero.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SuperHero;

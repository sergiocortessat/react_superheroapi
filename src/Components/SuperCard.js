/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import SuperHero from './SuperHeroStats';
// import { HiOutlineMailOpen } from 's/hi';
// import { LinearProgress } from '@material-ui/core';

const SuperCard = ({ data }) => {
  const listElements = data.map((item) => (

    <div className="card" style={{ width: '18rem' }} key={item.name}>
      <img className="card-img-top" src={item.image} alt="Card" />
      <div className="card-body hero-name">
        <h5 className="card-title">
          Name:
          {' '}
          {item.name}
        </h5>
        <p className="card-text">
          Full-Name:
          {' '}
          {item.fullName ? item.fullName : item.name}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Race:
          {' '}
          {item.race ? item.race : 'Unknown'}
        </li>
        <li className="list-group-item first-appearance">
          First Appearance:
          {' '}
          {(item.firstAppearance && item.firstAppearance !== '-') && item.firstAppearance}
          {item.firstAppearance === '-' && 'Unknown'}
        </li>
        <li className="list-group-item">
          Publisher:
          {' '}
          {item.publisher}
        </li>
      </ul>
      <div className="card-body hero-stats">
        <h3>Hero Stats</h3>
        <SuperHero data={item} />
      </div>
    </div>

  ));
  return (
    <>
      { listElements }
    </>
  );
};
SuperCard.propTypes = {
  // data: PropTypes.shape({
  //   // //     name: PropTypes.string.isRequired,x`x
  //   // //     image: PropTypes.shape({
  //   // //       url: PropTypes.string.isRequired,
  //   // //     }).isRequired,
  // }).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  // data: PropTypes.arrayOf.isRequired,

};
export default SuperCard;

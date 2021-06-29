import React from 'react';
import PropTypes from 'prop-types';

const SuperCard = ({ data }) => (
  <div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src={data.image.url} alt="Card" />
    <div className="card-body">
      <h5 className="card-title">{data.name}</h5>
      <p className="card-text">{data.biography['full-name']}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
    <div className="card-body">
      <a href="#index" className="card-link">Card link</a>
      <a href="#index" className="card-link">Another link</a>
    </div>
  </div>
);
SuperCard.propTypes = {
//   data: PropTypes.shape({
//     name: PropTypes.string.isRequired,x`x
//     image: PropTypes.shape({
//       url: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default SuperCard;

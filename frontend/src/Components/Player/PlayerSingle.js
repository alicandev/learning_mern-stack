import React from 'react';
import PropTypes from 'prop-types';

const PlayerSingle = ({ player }) => {
  return (
    <div className="PlayerSingle row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src="football.jpeg" alt="football" />
            <span className="card-title">
              {player.firstName} {player.lastName}
            </span>
          </div>
          <div className="card-content">
            <p>Phone: {player.phone} – Email: {player.email}</p>
            <p>Strength: {player.strength} – Email: {player.endurance}</p>
          </div>
          <div className="card-action">
            Team: {player.team}
          </div>
        </div>
      </div>
    </div>
  );
};

PlayerSingle.propTypes = {
  player: PropTypes.object
};
 
export default PlayerSingle;
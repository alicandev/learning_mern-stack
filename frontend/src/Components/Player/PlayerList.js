import React from 'react';
import PropTypes from 'prop-types';

const PlayerList = (props) => {
  return (
    <div className="PlayerList">
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Players</h4>
        </li>
        {props.players.map(item => (
          <a 
            key={item._id} 
            href="#!" 
            className="collection-item" 
            onClick={props.updateCurrentPlayer.bind(this, item)}
          >
            {item.firstName} {item.lastName}
          </a>
        ))}
      </ul>
    </div>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  updateCurrentPlayer: PropTypes.func.isRequired,
};
 
export default PlayerList;
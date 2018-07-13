import React, { PropTypes } from 'react';
import styles from './Lane.css';
import Lane from './LaneContainer.js';

const Lanes = ({ lanes }) => {
  return (
    <div className={styles.Lanes}>{lanes.map(lane => (
      <Lane 
      	className="lane" 
      	key={lane.id} 
      	lane={lane} 
      />
    ))}
    </div>
  );
};

Lanes.propTypes = {
  lanes: PropTypes.array,
};

export default Lanes;
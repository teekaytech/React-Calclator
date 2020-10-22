import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div>
      {result}
    </div>
  );
};

Display.defaultProps = {
  result: 'O',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;

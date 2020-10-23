import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <section className="display">
      {result}
    </section>
  );
};

// Display.defaultProps = {
//   result: '0',
// };

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;

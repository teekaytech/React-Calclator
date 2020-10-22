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

Display.defaultProps = {
  result: 'O',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;

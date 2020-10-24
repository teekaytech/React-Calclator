import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result, details } = props;
  return (
    <section className="display">
      <div className="details">
        { details }
      </div>
      { result }
    </section>
  );
};

Display.defaultProps = {
  result: '0',
  details: '',
};

Display.propTypes = {
  result: PropTypes.string,
  details: PropTypes.string,
};

export default Display;

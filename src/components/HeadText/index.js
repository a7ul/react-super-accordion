import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

const HeadText = (props) => {
  const { toggle, ...extraProps } = props;
  return (
    <div style={styles.container} {...extraProps}>
      <button onClick={() => toggle()}>CLICK</button>
      {props.text}
    </div>
  );
};
HeadText.defaultProps = {
  text: '',
};
HeadText.propTypes = {
  text: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};
export default HeadText;

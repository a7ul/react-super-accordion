import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

const HeadText = (props) => {
  const {
    toggle, text, expanded, ...extraProps
  } = props;
  return (
    <div onClick={() => toggle()} style={styles.container} {...extraProps}>
      <div style={styles.title}>
        {text}
      </div>
      <div style={expanded ? styles.sideArrowExpanded : styles.sideArrow}>
        ⌃
      </div>
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

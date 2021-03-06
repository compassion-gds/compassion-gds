import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import stackStyles from './Stack.styles';

export const Stack = ({ space, splitAfter, ...props }) => {
  return (
    <div css={stackStyles({ space, splitAfter })} className="gds-stack">
      {props.children}
    </div>
  );
};

const greaterThanNegativeOne = (props, propName, componentName) => {
  const name = componentName || 'ANONYMOUS';

  if (props[propName]) {
    const value = props[propName];
    if (typeof value === 'number') {
      return value >= -1
        ? null
        : new Error(`${propName} in ${name} must be greater than -1.`);
    }
  }

  return null;
};

Stack.propTypes = {
  /** Any valid CSS margin value. */
  space: PropTypes.string,
  /** The child after which all remaining children will be bottom-aligned. */
  splitAfter: greaterThanNegativeOne,
};

Stack.defaultProps = {
  space: `1.5rem`,
  splitAfter: undefined,
};

import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import gridStyles from './Grid.styles';

export const Grid = ({ minWidth, space, ...props }) => {
  return (
    <div css={gridStyles({ minWidth, space })} className="gds-grid">
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  minWidth: PropTypes.string,
  space: PropTypes.string,
};

Grid.defaultProps = {
  minWidth: `15rem`,
  space: `1.5rem`,
};

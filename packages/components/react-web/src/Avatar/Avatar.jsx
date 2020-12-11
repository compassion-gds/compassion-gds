import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import avatarStyles from './Avatar.styles';

/**
 * UI component for profile avatars
 */
export const Avatar = ({ src, alt, children }) => {
  const [isImg, setIsImg] = useState(!!src);

  const letters = children ? children.substring(0,2) : alt.substring(0,2)

  return (
    <React.Fragment>
      {isImg ? (
        <img
          src={src}
          alt={alt}
          css={avatarStyles}
          onError={() => setIsImg(false)}
        />
      ) : (
        <div css={avatarStyles}>
          <span>{letters}</span>
        </div>
      )}
    </React.Fragment>
  );
};

Avatar.propTypes = {
  /**
   * Path to avatar image
   */
  src: PropTypes.string,
  /**
   * Specifies alternate text for avatar image
   */
  alt: PropTypes.string.isRequired,
  /**
   * Characters to render in place of an image
   */
  children: PropTypes.string,
};

Avatar.defaultProps = {
  src: undefined,
  children: undefined,
};

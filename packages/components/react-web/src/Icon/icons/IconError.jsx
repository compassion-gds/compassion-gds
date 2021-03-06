// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import iconStyles from "../Icon.styles";

function IconError(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill}
      className="gds-icon"
      css={iconStyles}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 9a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.678 3.152A2 2 0 0 1 11.444 3h9.112a2 2 0 0 1 1.415.586l6.443 6.443A2.002 2.002 0 0 1 29 11.444v9.112a2 2 0 0 1-.586 1.415l-6.443 6.443a2.001 2.001 0 0 1-1.415.586h-9.112a2 2 0 0 1-1.415-.586l-6.443-6.443A2 2 0 0 1 3 20.556v-9.112a2 2 0 0 1 .586-1.415l6.443-6.443a2 2 0 0 1 .65-.434zM20.556 5h-9.112l-.708-.707.708.707L5 11.444l-.707-.708.707.708v9.112L11.444 27l-.708.707.708-.707h9.112L27 20.556v-9.112l.707-.708-.707.708L20.556 5z"
      />
      <path d="M16 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    </svg>
  );
}
export default IconError;

IconError.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

IconError.defaultProps = {
  fill: "currentColor",
  width: "1em",
  height: "1em",
};

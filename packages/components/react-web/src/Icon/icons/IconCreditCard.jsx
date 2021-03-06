// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import iconStyles from "../Icon.styles";

function IconCreditCard(props) {
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
        d="M2 8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8zm26 0H4v16h24V8z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1zM14 21a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zM2 12.107a1 1 0 0 1 1-1h26a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z"
      />
    </svg>
  );
}
export default IconCreditCard;

IconCreditCard.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

IconCreditCard.defaultProps = {
  fill: "currentColor",
  width: "1em",
  height: "1em",
};
